---
layout: doc
title: 'Agent 03：给对话加个 Loading'
date: '2026-08-26 23:33:00'
prev:
  text: '加上多轮对话'
  link: '/posts/agent/02-多轮对话'
---

# Agent 03：给对话加个 Loading

上一章把多轮对话加上以后，我启动起来试了一下。它现在确实有记忆了，但是我输入完以后，模型返回之前，终端里什么反应都没有。

那就给它加个 Loading。

这个其实很简单。我输入完以后，在请求模型前开一个定时器。等模型返回了，在输出回答前把定时器关掉。

完整代码：

```typescript
import { stdin, stdout } from 'node:process';
import { clearLine, cursorTo } from 'node:readline';
import { createInterface } from 'node:readline/promises';
import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions.js';

const apiKey = process.env.DEEPSEEK_API_KEY;
if (!apiKey) {
  throw new Error('Missing DEEPSEEK_API_KEY');
}

const client = new OpenAI({
  apiKey,
  baseURL: 'https://api.deepseek.com',
});
const readline = createInterface({ input: stdin, output: stdout });
const messages: ChatCompletionMessageParam[] = [];

try {
  while (true) {
    const prompt = (await readline.question('You: ')).trim();

    if (prompt === '/exit') {
      break;
    }
    if (!prompt) {
      continue;
    }

    messages.push({ role: 'user', content: prompt });

    let loadingDots = 0;
    stdout.write('DeepSeek: Loading');
    const loadingInterval = setInterval(() => {
      loadingDots = (loadingDots + 1) % 4;
      cursorTo(stdout, 0);
      clearLine(stdout, 0);
      stdout.write(`DeepSeek: Loading${'.'.repeat(loadingDots)}`);
    }, 250);

    try {
      let content: string | null | undefined;
      try {
        const completion = await client.chat.completions.create({
          model: 'deepseek-v4-flash',
          messages,
        });
        content = completion.choices[0]?.message.content;
      } finally {
        clearInterval(loadingInterval);
        cursorTo(stdout, 0);
        clearLine(stdout, 0);
      }

      if (!content) {
        throw new Error('DeepSeek returned an empty response');
      }

      messages.push({ role: 'assistant', content });
      console.log(`DeepSeek: ${content}`);
    } catch (error) {
      messages.pop();
      console.error(error instanceof Error ? error.message : String(error));
    }
  }
} finally {
  readline.close();
}
```

