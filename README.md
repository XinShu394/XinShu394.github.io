# 陈天 · Tian Chen — 个人主页

静态个人主页，晚霞主题（浅色暖调、二次元背景插画）。
线上地址：https://xinshu394.github.io/ （GitHub Pages，`main` 分支根目录）

页面顺序：首页 → 教育背景 → 实习经历 → 项目经历 → 联系方式。定位是个人展示，不写求职目标和自我评价，面试不同岗位时都能用。

## 本地运行

需要 Node.js 18+ 和 Python 3，不需要安装 npm 依赖。

```sh
npm run dev     # http://127.0.0.1:4173
npm run check   # 语法、本地资源、锚点、重复 ID、排除内容检查
npm run build   # 输出到 dist/
```

## 内容维护

- `content.js`：**全部文字内容都在这里**（个人信息、教育、实习、项目、背景音乐）。改内容只改这一个文件。
- `index.html`：页面骨架。
- `style.css`：晚霞主题样式与动效，支持「减少动态效果」系统偏好。
- `app.js`：渲染内容、项目筛选与详情弹窗、背景音乐播放器。
- `assets/`
  - `art/`：首屏晚霞插画和四个章节图标，由 Codex 内置生图生成。
  - `projects/`：项目真实截图，以及 Wind 官网产品图。
  - `logos/`：公司、学校与数据平台 logo。

## 背景音乐

播放器曲目为《Until the Game Says Goodnight》，默认不自动播放。
把音频文件放到 `assets/audio/until-the-game-says-goodnight.mp3` 即可生效；文件缺失时播放器会提示“音频文件尚未放入”。

## 来源与版权

- 履历与项目数据依据本人简历（含真实性边界），不代表实时统计。
- 腾讯、国泰海通、Steam、TapTap 的 logo 来自 Wikimedia Commons 或本人提供的图片；DataEye、引力引擎与两所学校的 logo 来自各自官网；Wind 截图来自 Wind 官网。商标与截图归各自权利人所有，仅用于说明个人经历。
- SHUXIN 角色素材归作者本人所有，未授予再分发许可。
