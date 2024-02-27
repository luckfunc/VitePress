import{_ as t,c as e,o as i,a2 as l}from"./chunks/framework.Bk-UhgEh.js";const m=JSON.parse('{"title":"Git 提交规范","description":"","frontmatter":{},"headers":[],"relativePath":"posts/notes/git提交规范.md","filePath":"posts/notes/git提交规范.md","lastUpdated":1679606041000}'),a={name:"posts/notes/git提交规范.md"},s=l('<h1 id="git-提交规范" tabindex="-1">Git 提交规范 <a class="header-anchor" href="#git-提交规范" aria-label="Permalink to &quot;Git 提交规范&quot;">​</a></h1><p>让ChatGpt给我生成了一份git的提交规范，以后提交代码的时候按照这个规范走，后续有遇到的问题在继续补充一下。</p><ul><li><code>&lt;type&gt;</code>: 用于说明 commit 的类别，只允许使用下面7个标识符。 <ul><li>feat：新增 feature。</li><li>fix：修复 bug。</li><li>docs：修改文档。</li><li>style：修改代码格式，不影响代码逻辑。</li><li>refactor：重构代码，理论上不影响现有功能。</li><li>test：增加测试用例。</li><li>chore：修改工具相关（包括但不限于文档、代码生成等）</li></ul></li></ul><hr><p>在别的地方看到还有这两个</p><ul><li>revert - 回退</li><li>build - 打包</li><li><code>&lt;scope&gt;(选填)</code>: 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等。</li><li><code>&lt;subject&gt;</code>: 是 commit 目的的简短描述，不超过50个字符。</li></ul><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git commit -m &quot;feat(users): add login functionality&quot;</span></span></code></pre></div><p>表示新增了一个用户登录的功能。</p><p>当然，这只是一个示例，你可以根据实际情况进行相应的修改。</p>',10),o=[s];function c(p,n,d,r,_,u){return i(),e("div",null,o)}const g=t(a,[["render",c]]);export{m as __pageData,g as default};
