# SHUXIN · Personal Playground

陈天的个人静态主页，围绕 AI、游戏、产品与虚拟角色 SHUXIN 展开。

## 本地运行

Node.js 18+ 和 Python 3，无需安装 npm 依赖。

```sh
npm run dev
# http://127.0.0.1:4173
npm run check
npm run build
```

根目录可直接作为 GitHub Pages 发布目录。`dist/` 为可移植静态输出。

## 内容维护

- `index.html`：个人介绍、项目、履历与联系信息。
- `style.css`：响应式布局与动效，支持减少动态效果偏好。
- `app.js`：项目筛选、角色问候、详情弹窗和音乐播放器。
- `assets/`：仅含网站需要的角色展示素材与图鉴封面。

播放器默认关闭，需要用户点击后播放。指定的《Until the Game Says Goodnight》暂未在公开仓库或检查过的本地 BOGAME 音乐目录中找到。找到录音后放入 `assets/`，在 `app.js` 的 `soundtrack.src` 填入相对路径。目前不播放替代曲目。

## 来源与状态

职业、教育、研究与项目阶段数据依据用户提供的简历，公开项目链接核对于 2026-11-10。三角洲知识库 Agent 明确为开发中；TextAgent 卡片内对话是交互示意。

角色素材由用户提供，依据 SHUXIN 角色资产包；网站使用压缩展示副本，不修改原始设定。完整素材工程与原始简历不纳入版本控制。

设计参考：[Nomadic Tribe](https://2019.makemepulse.com/)、[JIEJOE](https://www.jiejoe.com/home)。借鉴探索叙事与动态排版方向，未复制第三方网站代码或资产；未核实这两个完整网站的开源许可。

验证：JavaScript 语法、引用资源、内部锚点、重复 ID、指定排除内容检查通过。浏览器自动化因无法可靠识别 Windows 当前浏览器 URL 而停止，实际浏览器视觉验收尚未完成。

网站代码与角色、封面、音乐分别归其权利人所有，未对角色素材授予再分发许可。
