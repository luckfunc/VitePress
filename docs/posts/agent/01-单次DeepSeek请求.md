---
layout: doc
title: 'Agent 01：我为什么要自己写一个 Agent'
date: '2026-08-25 22:00:00'
next:
  text: '加上多轮对话'
  link: '/posts/agent/02-多轮对话'
---

# Agent 01：我为什么要自己写一个 Agent

现在市面上有很多 Agent 客户端，像 Codex CLI、Claude Code，还有 Pi，我都用过。这里面我用得比较多的是 Pi。

Agent 这个东西一直被说得神乎其神。前段时间 X 上又有很多人在聊。Pi 我其实已经用了挺久，但是它里面具体怎么实现的，我一直没认真了解过。

网上也能搜到不少文章，但很多一看就是 AI 写的，感觉没什么营养。我觉得这也不是一个好的技术沉淀，所以准备自己把实际学习的过程记下来。

刚开始我直接把 Pi 的源码拉了下来，也看了一些入口和函数调用。

但是它代码已经很多了。我在还没看懂的情况下，会觉得里面有些函数的职责、类型，还有目录结构都挺粗糙的。可问题是，我现在也不能确定它是真的粗糙，还是因为我不知道这些代码要解决什么问题。

直接硬看还是挺费劲的。

所以我就想，要不自己边写边学。先搭一个最简单的 Agent，然后一步一步往里面塞东西。等真的遇到问题了，我应该就能明白 Pi 里面那些代码为什么要那么写。

以后别人说某个 Agent 好，我至少能知道它好在哪。别人说它写得不好，我也能知道具体是哪不好。

那下面我是不是可以开始了？

我理解和模型交互，最基本的不就是一个 HTTP 请求吗？

那就先写一个 HTTP 请求。

## 开始

我先初始化了一个项目。一开始装的是 TS5，装的过程中我突然想到，TS7 不是已经发布了吗？所以我又装上了 TS7，正好也可以在这个项目里试一下它的性能。

我的理解是，首先它得知道你从哪里输入，从哪里输出。

```typescript
const readline = createInterface({ input: stdin, output: stdout });
```

我这里就是从终端输入，然后再输出到终端。

那怎么和模型交互呢？可以直接用 OpenAI 的 SDK，DeepSeek 的 API 也支持这种格式。

代码直接贴出来：

```typescript
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import OpenAI from 'openai';

const apiKey = process.env.DEEPSEEK_API_KEY;
if (!apiKey) {
  throw new Error('Missing DEEPSEEK_API_KEY');
}

const readline = createInterface({ input: stdin, output: stdout });
const prompt = (await readline.question('You: ')).trim();
readline.close();

if (!prompt) {
  throw new Error('Message cannot be empty');
}

const client = new OpenAI({
  apiKey,
  baseURL: 'https://api.deepseek.com',
});

const completion = await client.chat.completions.create({
  model: 'deepseek-v4-flash',
  messages: [{ role: 'user', content: prompt }],
});

const content = completion.choices[0]?.message.content;
if (!content) {
  throw new Error('DeepSeek returned an empty response');
}

console.log(`DeepSeek: ${content}`);
```

这里就是从终端输入，然后输出到终端，就完了。

然后我就启动起来试了一下，试了很多次，好像还不错。

但是我突然意识到一个问题，它只能是单次会话。问完一句，模型回答以后程序就结束了。

那下面是不是该加上多轮对话了？
