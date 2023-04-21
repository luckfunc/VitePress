import{_ as a,c as s,o as e,b as n}from"./app.009acc7b.js";const g=JSON.parse('{"title":"Tools","description":"","frontmatter":{"layout":"doc","title":"Tools"},"headers":[{"level":2,"title":"博客相关","slug":"博客相关","link":"#博客相关","children":[]},{"level":2,"title":"表格组件","slug":"表格组件","link":"#表格组件","children":[]},{"level":2,"title":"插画图","slug":"插画图","link":"#插画图","children":[]},{"level":2,"title":"css布局小样式","slug":"css布局小样式","link":"#css布局小样式","children":[]},{"level":2,"title":"生成树结构小工具","slug":"生成树结构小工具","link":"#生成树结构小工具","children":[]}],"relativePath":"tools.md","lastUpdated":1677072027000}'),l={name:"tools.md"},t=n(`<h1 id="一些工具" tabindex="-1">一些工具 <a class="header-anchor" href="#一些工具" aria-hidden="true">#</a></h1><h2 id="博客相关" tabindex="-1">博客相关 <a class="header-anchor" href="#博客相关" aria-hidden="true">#</a></h2><ul><li><a href="https://tucdn.wpon.cn/" target="_blank" rel="noreferrer">免费快速的图床</a></li></ul><h2 id="表格组件" tabindex="-1">表格组件 <a class="header-anchor" href="#表格组件" aria-hidden="true">#</a></h2><ul><li><a href="https://gridmanager.lovejavascript.com/api/index.html" target="_blank" rel="noreferrer">gridmanager组件官网</a></li></ul><h2 id="插画图" tabindex="-1">插画图 <a class="header-anchor" href="#插画图" aria-hidden="true">#</a></h2><ul><li><a href="https://undraw.co/illustrations" target="_blank" rel="noreferrer">插画图地址</a></li></ul><h2 id="css布局小样式" tabindex="-1">css布局小样式 <a class="header-anchor" href="#css布局小样式" aria-hidden="true">#</a></h2><ul><li><a href="https://uiverse.io/" target="_blank" rel="noreferrer">地址</a></li></ul><h2 id="生成树结构小工具" tabindex="-1">生成树结构小工具 <a class="header-anchor" href="#生成树结构小工具" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/yangshun/tree-node-cli#readme" target="_blank" rel="noreferrer">tree-node-cli</a><img src="https://tucdn.wpon.cn/2023/02/22/2e7d7cbb52fc3.png" alt="tree"></li></ul><p>看起来目录是不是清晰很多?</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">首先安装一下这个小工具</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -g tree-node-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">或者</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install --global tree-node-cli</span></span>
<span class="line"></span></code></pre></div><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">使用git bash打开命令行</span></span>
<span class="line"><span style="color:#A6ACCD;">tree -h 查看一些tree命令的参数</span></span>
<span class="line"></span></code></pre></div><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">tree -L n 显示项目的层级。n表示层级数。</span></span>
<span class="line"><span style="color:#A6ACCD;">如果你想显示两层的目录结构</span></span>
<span class="line"><span style="color:#A6ACCD;">tree -L 2即可</span></span>
<span class="line"><span style="color:#A6ACCD;">如果你过滤掉不想显示的目录,可以使用这个命令</span></span>
<span class="line"><span style="color:#A6ACCD;">tree -I pattern </span></span>
<span class="line"><span style="color:#A6ACCD;">比如你想过滤掉node-modules和public这个目录</span></span>
<span class="line"><span style="color:#A6ACCD;">tree -I &quot;node_modules|public&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">如果既想显示两层的目录结构,又想过滤掉如node_modules这样的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">tree -L 2 -I &quot;node_modules | public&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">最后想输出到readme.md上可以</span></span>
<span class="line"><span style="color:#A6ACCD;">tree -L 2 -I &quot;node_modules&quot; &gt; readme.md</span></span>
<span class="line"><span style="color:#A6ACCD;">就可以得到上面图片显示的结果啦</span></span>
<span class="line"></span></code></pre></div>`,17),r=[t];function o(p,i,c,d,h,u){return e(),s("div",null,r)}const m=a(l,[["render",o]]);export{g as __pageData,m as default};