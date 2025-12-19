import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vite-miniAuto-AI/',
  title: "My Awesome Project",
  description: "A VitePress Site",

  themeConfig: {
    siteTitle: '幻尔科技',
    logo: '/e-logo.png',
    // Show both H2 and H3 in the right-side outline
    outline: [2, 3],
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://hiwonder-docs.github.io/vite-Hiwonder-docs/', target: '_self' },
      { text: 'shop', link: 'https://www.hiwonder.com' }
    ],

    // 侧边栏分组配置：
    // - 一级：对应 docs/page 目录下的各章文件名（不含 .md）
    // - 二级：对应每一章 Markdown 文件中的二级标题（## 开头）
    sidebar: [
      {
        // 1.学前先看.md
        text: '1.学前先看',
        link: '/page/1.学前先看.html',
        collapsed: false,
        items: [
          { text: '1.1 认识miniAuto AI', link: '/page/1.学前先看.html#_1-1-认识miniauto-ai' },
          { text: '1.2 miniAuto AI组装教程', link: '/page/1.学前先看.html#_1-2-miniauto-ai组装教程' },
          { text: '1.3 充电及注意事项', link: '/page/1.学前先看.html#_1-3-充电及注意事项' }
        ]
      },
      {
        // 2.编程工具安装与介绍.md
        text: '2.编程工具安装与介绍',
        link: '/page/2.编程工具安装与介绍.html',
        collapsed: true,
        items: [
          { text: '2.1 Arduino IDE安装及界面介绍', link: '/page/2.编程工具安装与介绍.html#_2-1-arduino-ide安装及界面介绍' },
          { text: '2.2 Arduino IDE使用说明', link: '/page/2.编程工具安装与介绍.html#_2-2-arduino-ide使用说明' }
        ]
      },
      {
        // 3.出厂程序下载说明.md
        text: '3.出厂程序下载说明',
        link: '/page/3.出厂程序下载说明.html',
        collapsed: true,
        items: [
          { text: '3.1 准备工作及注意事项', link: '/page/3.出厂程序下载说明.html#_3-1-准备工作及注意事项' },
          { text: '3.2 程序下载', link: '/page/3.出厂程序下载说明.html#_3-2-程序下载' }
        ]
      },
      {
        // 4.APP使用说明.md
        text: '4.APP使用说明',
        link: '/page/4.APP使用说明.html',
        collapsed: true,
        items: [
          { text: '4.1 手机APP安装', link: '/page/4.APP使用说明.html#_4-1-手机app安装' },
          { text: '4.2 手机APP连接', link: '/page/4.APP使用说明.html#_4-2-手机app连接' },
          { text: '4.3 功能介绍', link: '/page/4.APP使用说明.html#_4-3-功能介绍' }
        ]
      },
      {
        // 5.运动控制基础课程.md
        text: '5.运动控制基础课程',
        link: '/page/5.运动控制基础课程.html',
        collapsed: true,
        items: [
          { text: '5.1 小车运动库文件分析', link: '/page/5.运动控制基础课程.html#_5-1-小车运动库文件分析' },
          { text: '5.2 小车前进和转向', link: '/page/5.运动控制基础课程.html#_5-2-小车前进和转向' },
          { text: '5.3 小车前后左右平移', link: '/page/5.运动控制基础课程.html#_5-3-小车前后左右平移' },
          { text: '5.4 小车斜向运动', link: '/page/5.运动控制基础课程.html#_5-4-小车斜向运动' },
          { text: '5.5 小车漂移运动', link: '/page/5.运动控制基础课程.html#_5-5-小车漂移运动' }
        ]
      },
      {
        // 6.二次开发项目课程.md
        text: '6.二次开发项目课程',
        link: '/page/6.二次开发项目课程.html',
        collapsed: true,
        items: [
          { text: '6.1 二次开发库文件介绍', link: '/page/6.二次开发项目课程.html#_6-1-二次开发库文件介绍' },
          { text: '6.2 点亮RGB说明', link: '/page/6.二次开发项目课程.html#_6-2-点亮rgb说明' },
          { text: '6.3 音乐播放说明', link: '/page/6.二次开发项目课程.html#_6-3-音乐播放说明' },
          { text: '6.4 超声波测距说明', link: '/page/6.二次开发项目课程.html#_6-4-超声波测距说明' },
          { text: '6.5 超声波跟随说明', link: '/page/6.二次开发项目课程.html#_6-5-超声波跟随说明' },
          { text: '6.6 超声波避障说明', link: '/page/6.二次开发项目课程.html#_6-6-超声波避障说明' },
          { text: '6.7 智能巡线说明', link: '/page/6.二次开发项目课程.html#_6-7-智能巡线说明' },
          { text: '6.8 行人检测说明', link: '/page/6.二次开发项目课程.html#_6-8-行人检测说明' },
          { text: '6.9 十字路口判断说明 ', link: '/page/6.二次开发项目课程.html#_6-9-十字路口判断说明' },
          { text: '6.10 APP控制说明', link: '/page/6.二次开发项目课程.html#_6-10-app控制说明' }
        ]
      },
      {
        // 7.AI大模型基础课程.md
        text: '7.AI大模型基础课程',
        link: '/page/7.AI大模型基础课程.html',
        collapsed: true,
        items: [
          { text: '7.1 WonderLLM介绍', link: '/page/7.AI大模型基础课程.html#_7-1-wonderllm介绍' },
          { text: '7.2 联网及配置', link: '/page/7.AI大模型基础课程.html#_7-2-联网及配置' },
          { text: '7.3 音量控制', link: '/page/7.AI大模型基础课程.html#_7-3-音量控制' },
          { text: '7.4 聊天模式', link: '/page/7.AI大模型基础课程.html#_7-4-聊天模式' },
          { text: '7.5 表情模式', link: '/page/7.AI大模型基础课程.html#_7-5-表情模式' },
          { text: '7.6 天气时钟模式', link: '/page/7.AI大模型基础课程.html#_7-6-天气时钟模式' },
          { text: '7.7 摄像头模式', link: '/page/7.AI大模型基础课程.html#_7-7-摄像头模式' },
          { text: '7.8 自由聊天', link: '/page/7.AI大模型基础课程.html#_7-8-自由聊天' },
          { text: '7.9 场景理解', link: '/page/7.AI大模型基础课程.html#_7-9-场景理解' },
          { text: '7.10 唤醒词修改', link: '/page/7.AI大模型基础课程.html#_7-10-唤醒词修改' },
          { text: '7.11 固件下载', link: '/page/7.AI大模型基础课程.html#_7-11-固件下载' }
        ]
      },
      {
        // 8.AI大模型应用课程.md
        text: '8.AI大模型应用课程',
        link: '/page/8.AI大模型应用课程.html',
        collapsed: true,
        items: [
          { text: '8.1 WonderLLM大模型模块安装', link: '/page/8.AI大模型应用课程.html#_8-1-wonderllm大模型模块安装' },
          { text: '8.2 WonderLLM大模型模块模式说明', link: '/page/8.AI大模型应用课程.html#_8-2-wonderllm大模型模块模式说明' },
          { text: '8.3 语音控制', link: '/page/8.AI大模型应用课程.html#_8-3-语音控制' },
          { text: '8.4 智能避障', link: '/page/8.AI大模型应用课程.html#_8-4-智能避障' },
          { text: '8.5 智能巡线', link: '/page/8.AI大模型应用课程.html#_8-5-智能巡线' },
          { text: '8.6 智能管家', link: '/page/8.AI大模型应用课程.html#_8-6-智能管家' },
          { text: '8.7 智能搬运', link: '/page/8.AI大模型应用课程.html#_8-7-智能搬运' }
        ]
      },
      {
        // 9.AI大模型离线课程.md
        text: '9.AI大模型离线课程',
        link: '/page/9.AI大模型离线课程.html',
        collapsed: true,
        items: [
          { text: '9.1 视觉模块库文件及寄存器介绍', link: '/page/9.AI大模型离线课程.html#_9-1-视觉模块库文件及寄存器介绍' },
          { text: '9.2 图像回传', link: '/page/9.AI大模型离线课程.html#_9-2-图像回传' },
          { text: '9.3 颜色识别', link: '/page/9.AI大模型离线课程.html#_9-3-颜色识别' },
          { text: '9.4 颜色追踪', link: '/page/9.AI大模型离线课程.html#_9-4-颜色追踪' },
          { text: '9.5 视觉巡线', link: '/page/9.AI大模型离线课程.html#_9-5-视觉巡线' },
          { text: '9.6 人脸识别', link: '/page/9.AI大模型离线课程.html#_9-6-人脸识别' }
        ]
      },
      {
        // 10.机械爪控制课程.md
        text: '10.机械爪控制课程',
        link: '/page/10.机械爪控制课程.html',
        collapsed: true,
        items: [
          { text: '10.1 miniAuto AI机械爪组装教程', link: '/page/10.机械爪控制课程.html#_10-1-miniauto-ai机械爪组装教程' },
          { text: '10.2 机械爪APP控制说明', link: '/page/10.机械爪控制课程.html#_10-2-机械爪app控制说明' },
          { text: '10.3 声波控爪开合说明', link: '/page/10.机械爪控制课程.html#_10-3-声波控爪开合说明' },
          { text: '10.4 物块搬运说明', link: '/page/10.机械爪控制课程.html#_10-4-物块搬运说明' }
        ]
      },
      {
        // 11.体感手套控制课程.md
        text: '11.体感手套控制课程',
        link: '/page/11.体感手套控制课程.html',
        collapsed: true,
        items: [
          { text: '11.1 体感手套介绍及佩戴方法', link: '/page/11.体感手套控制课程.html#_11-1-体感手套介绍及佩戴方法' },
          { text: '11.2 体感手套连接及控制', link: '/page/11.体感手套控制课程.html#_11-2-体感手套连接及控制' }
        ]
      },
      {
        // 12.串口通信实操课程.md
        text: '12.串口通信实操课程',
        link: '/page/12.串口通信实操课程.html',
        collapsed: true,
        items: [
          { text: '12.1 设备主从通讯原理', link: '/page/12.串口通信实操课程.html#_12-1-设备主从通讯原理' },
          { text: '12.2 PC串口控制', link: '/page/12.串口通信实操课程.html#_12-2-pc串口控制' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'shopify', link: 'https://www.hiwonder.com' }
    ]
  }
})
