# Daystar Global Website

这是 Daystar Global 的静态官网文件包，适合部署到 Vercel、Netlify、Cloudflare Pages、GitHub Pages 或普通服务器。

## 文件结构

- `index.html`：网站主页面
- `styles.css`：页面样式
- `script.js`：移动端菜单与表单邮件发送逻辑
- `assets/favicon.svg`：网站图标
- `assets/growth-console.svg`：首屏增长看板视觉图
- `vercel.json`：Vercel 静态站部署配置

## 本地预览

直接双击 `index.html` 即可打开预览。

更推荐使用本地服务器预览：

```bash
python3 -m http.server 3000
```

然后打开：

```text
http://localhost:3000
```

## 上线方式

### 方式 1：Vercel

1. 登录 Vercel
2. 新建 Project
3. 上传本文件夹或连接 GitHub 仓库
4. Framework Preset 选择 Other
5. Build Command 留空
6. Output Directory 留空或填写 `.`
7. Deploy

### 方式 2：Netlify

1. 登录 Netlify
2. 选择 Add new site
3. 拖拽整个文件夹上传
4. 发布后绑定域名

### 方式 3：传统服务器

把 `index.html`、`styles.css`、`script.js`、`assets` 上传到服务器网站根目录即可。

## 需要替换的信息

建议上线前替换：

- Logo
- 真实客户案例
- WhatsApp / 微信二维码
- 公司电话
- 隐私政策
- 表单收集方式

当前表单是 `mailto:` 邮件跳转。如果你希望客户提交后直接进入后台，建议改成：

- 飞书表单
- Google Form
- HubSpot
- Notion Form
- 自建 CRM API
