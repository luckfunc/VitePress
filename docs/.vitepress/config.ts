import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'

const RSSOptions: RSSOptions = {
  title: 'LuckFunc Blog',
  description: 'feedId:70744061308986368+userId:67831553045682176',
  copyright: 'Copyright © 2023 luckfunc',
  baseUrl: 'https://blog.luckfunc.com'
}
export default {
  title: 'Blog',
  lastUpdated: true,
  base: '/',
  vite: {
    plugins: [RssPlugin(RSSOptions)],
    server: {
      port: 8080,
    },
  },
  themeConfig: {
    siteTitle: "幸运函数",
    logo: '/avatar.png',
    description: '晚睡的程序员',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/luckfunc'
    }
    ],
    editLink: {
      pattern: 'https://github.com/luckfunc/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  markdown: {
    theme: {
      light: 'vitesse-dark', // 白天模式的主题
      dark: 'vitesse-dark',       // 夜晚模式的主题
    }
  }
}
//导航栏配置
function nav() {
  return [
    {
      text: 'Page',
      link: '/page'
    },
    {
      text: 'Home',
      link: '/index'
    },
    {
      text: 'Github',
      link: 'https://github.com/luckfunc'
    }
  ]
}
//侧标栏配置
function sidebar() {
  return [
    {
      text: 'Agent Harness 学习',
      items: [
        { text: '01 我为什么要自己写一个 Agent', link: '/posts/agent/01-单次DeepSeek请求' },
        { text: '02 加上多轮对话', link: '/posts/agent/02-多轮对话' },
      ]
    },
    {
      text: '2025年终总结',
      items: [
        { text: '2025今年计划', link: '/posts/2025-今年计划' },
      ]
    },
    {
      text: '2024年终总结',
      items: [
        { text: '2024年终总结', link: '/posts/2024-年终总结/2024' },
      ]
    },
    {
      text: 'SSL证书自动续签',
      items: [
        { text: 'SSL证书自动续签', link: '/posts/ssl证书自动续签/index' },
      ]
    },
    {
      text: '前端性能优化',
      items: [
        { text: '前端性能优化', link: '/posts/性能优化学习/前端性能优化思路' },
      ]
    },
    {
      text: '踩坑日记',
      items: [
        { text: 'webpack打包', link: '/posts/踩坑日记/webpack打包' },
        { text: '你不知道的console.log', link: '/posts/踩坑日记/你不知道的console.log' },
      ]
    },
    {
      text: 'React相关知识学习',
      items: [
        { text: 'useCallback', link: '/posts/react相关/useCallback' },
      ]
    },
    {
      text: 'React源码学习',
      items: [
        { text: 'useState', link: '/posts/React源码学习/useState' },
      ]
    },
    {
      text: 'Ahooks源码学习',
      items: [
        { text: 'useMount', link: '/posts/Ahooks源码学习/useMount' },
      ]
    },
    {
      text: 'Notes',
      items: [
        { text: 'React', link: '/posts/notes/React' },
        { text: 'TS', link: '/posts/notes/ts' },
        { text: 'JS', link: '/posts/notes/js' },
        { text: 'Array', link: '/posts/notes/array' },
        { text: 'Npm ', link: '/posts/notes/npm' },
        { text: 'How to Learn', link: '/posts/notes/如何快速学习新技术' },
        { text: 'Git提交规范', link: '/posts/notes/git提交规范' },
        { text: '切换IDE的终端为linux', link: '/posts/notes/在windows中切换IDE的终端为linux' },
        { text: 'gitignore过滤规则', link: '/posts/notes/gitignore的作用' },
        { text: 'script标签的defer和async区别', link: '/posts/notes/script标签的defer和async区别' },
        { text: 'Diff Object', link: '/posts/notes/diff-object' }
      ]
    },
    {
      text: 'JavaScript',
      items: [
        { text: 'import和export', link: '/posts/js/import' },
        { text: 'myPromise', link: '/posts/js/myPromise' },
        { text: '让你的终端输出有颜色的console.md', link: '/posts/js/让你的终端输出有颜色的console.md' }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'TypeScript总结', link: '/posts/ts/index' },
      ]
    },
    {
      text: 'nodeJs学习',
      items: [
        { text: 'Es Module和commonJs', link: '/posts/nodeJs/esm和commonJs' },
        { text: '全局变量&全局API', link: '/posts/nodeJs/全局变量和全局API' },
        { text: 'path方法', link: '/posts/nodeJs/path' },
        { text: 'os模块', link: '/posts/nodeJs/os' },
        { text: 'exec小实践', link: '/posts/nodeJs/exec' },
        { text: '图片裁剪', link: '/posts/nodeJs/图片裁剪' },
      ]
    },
    {
      text: 'Linux',
      items: [
        { text: 'Linux常用命令', link: '/posts/linux/linux常用命令' },
      ]
    },
    {
      text: '前端工程化实践',
      items: [
        { text: 'package.json文件配置', link: '/posts/前端工程化实践/packjson文件配置' },
      ]
    },
    {
      text: 'Nginx',
      items: [
        { text: 'Nginx学习', link: '/posts/nginx/index' },
      ]
    },
    {
      text: 'WorkFlow',
      items: [
        { text: 'Github Action', link: '/posts/workflow/index' }
      ]
    },
    {
      text: 'Markdown',
      items: [
        { text: 'Md Notes', link: '/posts/learn/md' },
      ]
    },
    {
      text: 'Mac Os',
      items: [
        { text: 'Mac Os工具', link: '/posts/macos/index' },
      ]
    },
  ]
}
