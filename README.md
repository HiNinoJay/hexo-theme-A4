
# hexo-theme-A4

<div align="right">
  <a title="zh-CN" href="/"><img src="https://img.shields.io/badge/-简体中文-24292f?style=for-the-badge" alt="简体中文" /></a>
  <a title="EN" href="README-EN.md">  <img src="https://img.shields.io/badge/-English-ffffff?style=for-the-badge" alt="English"></a>
  <a title="zh-TW" href="README_zh-TW.md"><img src="https://img.shields.io/badge/-繁体中文-ffffff?style=for-the-badge" alt="繁体中文"></a>
</div>



<div align="center" >
<a href="https://ninojay.top">
<img width=200px height=200px src="./source/img/A4-favicon.png" alt="A4" />
</a>
</div>

<div align="center">

模仿A4纸张的一个hexo极简主题。主打一个简洁，体积小，配置少。



[![](https://img.shields.io/npm/v/hexo-theme-a4?label=VERSION&logo=npm&style=for-the-badge)]()
[![](https://img.shields.io/badge/HEXO-v6.3.0-blue?style=for-the-badge&logo=hexo)](https://hexo.io/zh-cn/index.html)
[![](https://img.shields.io/node/v/hexo?style=for-the-badge&logo=node)](https://nodejs.org/en)

「让读者专注于阅读文字，写者专注于写作。」➡️ [效果展示](https://ninojay.top) ➡️ [使用文档](https://doc.ninojay.top)

_右上角一个star，更快更新功能_

</div>


[![](./source/img/market.png)](https://github.com/HiNinoJay/hexo-theme-A4)

## 🏹️特点

- [x] 博客网站基本功能：归档/标签/分类/目录
- [x] 首页简历化，word化，内容自定义化
- [x] 页面的页脚页眉自定义
- [x] 文章可单独配置：隐藏文章、开关评论、开关目录、文章置顶、[数学公式支持](https://ninojay.top/hexoplugin/hexo-filter-mathjax/)、[文章加密访问](https://ninojay.top/hexoplugin/hexo-blog-encrypt/)
- [x] [**全局色调可自定义配置，预览多种配色**](https://ninojay.top/hexoplugin/A4-color-change/)
- [x] 采用最美评论模块waline
- [x] 预置md可使用的css样式
- [x] 自带CDN加速国内访问速度
- [x] [可压缩图片/css/js资源大幅度提升网站访问速度](https://ninojay.top/hexoplugin/hexo-all-minifier/)
- [x] [详细的使用文档](https://doc.ninojay.top)
- [x] [经过作者验证可支持的hexo插件](https://ninojay.top/tags/hexoPlugin/)
  - [x] [mathjax 数学公式](https://ninojay.top/hexoplugin/hexo-filter-mathjax/)
  - [x] [encrypt 特定文章加密访问](https://ninojay.top/hexoplugin/hexo-blog-encrypt/)
  - [x] [github-emojis 语法支持](https://ninojay.top/hexoplugin/hexo-filter-github-emojis/) 
  - [x] [reference 脚标支持](https://ninojay.top/hexoplugin/hexo-reference/) 
  - [x] [minifier 压缩网站图片/css/js等资源](https://ninojay.top/hexoplugin/hexo-all-minifier/) 

## 🔥效果展示

### 多种主题配色

#### 灰白配色（默认）
![](https://cdn.jsdelivr.net/gh/hininojay/images/a4color/greywhite.png)

#### 绿金配色（已预置｜可一键启用）
![](https://cdn.jsdelivr.net/gh/hininojay/images/a4color/greengolden.png)

`颜色搭配是一门学问`，除A4推荐的两种配色外，你可以自行调色，并把颜色方案分享给大家。更多配色请看：[预览](https://ninojay.top/hexoplugin/A4-color-change/)。

### 首页

![](./source/img/index.png)

### 文章列表

![](./source/img/archive.png)

### 文章标签和分类信息

![](./source/img/tags&&categories.png)

### 评论

![](./source/img/comment.png)


## 👋如何使用

- 确认已通过命令`hexo init`创建好了文件夹,这里举例你的文件夹名为`website`
- `命令行`进入到`website`文件夹路径下
- 将`website`文件夹下的`_config.yml`文件中将主题设置为A4
- 接下来正式安装`a4主题`，有两种方式,任选其一

### npm方式（推荐）
- 执行命令 `npm install hexo-theme-a4@latest`
- 在`website`文件夹路径下创建`_config.a4.yml`文件，将[这里的内容](https://github.com/HiNinoJay/hexo-theme-A4/blob/main/_config.yml)复制进去
- 对主题的所有个性化配置都将在`_config.a4.yml`文件中进行，可按照文件中的注释自行配置
- 执行命令：`hexo s` 运行项目查看效果

### git方式
- 执行命令：`git clone git@github.com:HiNinoJay/hexo-theme-A4.git themes/A4`
- 在`website`文件夹路径下创建`_config.a4.yml`文件，将[这里的内容](https://github.com/HiNinoJay/hexo-theme-A4/blob/main/_config.yml) 复制进去
- 对主题的所有个性化配置都将在`_config.a4.yml`文件中进行，可按照文件中的注释自行配置
- 执行命令：`hexo s` 运行项目查看效果

## ⚠️必读配置

首页（index）和文章列表页（list）会在启动时（`hexo g` / `hexo s`）自动创建，无需手动执行命令。如需自定义首页内容，直接编辑 `source/index/index.md` 即可。

其他详细配置请看：
➡️ [使用文档](https://doc.ninojay.top)，已上线。

## ⬆️如何更新
根据你`安装`的方式，选择`对应的`更新方式。

### npm方式
命令行进入到你的博客网站`根目录`下
执行命令：
```shell
npm install hexo-theme-a4@latest
```

### git方式

命令行进入到`themes/A4`目录下
执行命令:

```shell
git pull
```
---

### 注意

以上两种方式更新后，请去该[github页面](https://github.com/HiNinoJay/hexo-theme-A4/releases)查看最新的版本，作者会告诉配置文件有无新增/修改。

如果有，则需要复制最新的[该文件](https://github.com/HiNinoJay/hexo-theme-A4/blob/main/_config.yml)对应到你的`_config.a4.yml`新增/修改的部分。

## ☕️支持

欢迎提交 pull request 或 issue，请提交至dev分支。

其他任何想交流的事，可发送邮件至：welcome@ninojay.top

如果觉得我做的不错，请给该项目一个star，或者[请我喝杯咖啡☕️](https://ninojay.top/supportbymoney/)

## 💗感谢

由衷感谢A4支持者们：https://github.com/HiNinoJay/hexo-theme-A4/blob/main/DONATION.md


## Stargazers over time

[![Stargazers over time](https://starchart.cc/HiNinoJay/hexo-theme-A4.svg)](https://starchart.cc/HiNinoJay/hexo-theme-A4)

