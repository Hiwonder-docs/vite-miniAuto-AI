import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vite-miniAuto-AI/',
  title: "My Awesome Project",
  description: "A VitePress Site",

  themeConfig: {
    // Show both H2 and H3 in the right-side outline
    outline: [2, 3],
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/page/1.学前先看' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '1.学前先看', link: '/page/1.学前先看' },
          { text: '2.编程工具安装与介绍', link: '/page/2.编程工具安装与介绍' },
          { text: '3.出厂程序下载说明', link: '/page/3.出厂程序下载说明' },
          { text: '4.APP使用说明', link: '/page/4.APP使用说明' },
          { text: '5.运动控制基础课程', link: '/page/5.运动控制基础课程' },
          { text: '6.二次开发项目课程', link: '/page/6.二次开发项目课程' },
          { text: '7.AI大模型基础课程', link: '/page/7.AI大模型基础课程' },
          { text: '8.AI大模型应用课程', link: '/page/8.AI大模型应用课程' },
          { text: '9.AI大模型离线课程', link: '/page/9.AI大模型离线课程' },
          { text: '10.机械爪控制课程', link: '/page/10.机械爪控制课程' },
          { text: '11.体感手套控制课程', link: '/page/11.体感手套控制课程' },
          { text: '12.串口通信实操课程', link: '/page/12.串口通信实操课程' }
          // { text: 'Appendix', link: '/page/Appendix' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'shopify', link: 'https://www.hiwonder.com' }
    ]
  }
})
