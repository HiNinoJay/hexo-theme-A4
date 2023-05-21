# hexo-theme-A4


<div align="center" >
<a href="https://github.com/HiNinoJay/hexo-theme-A4">
<img width=200px height=200px src="https://jsd.onmicrosoft.cn/npm/hexo-theme-a4@latest/source/img/A4-favicon.png" alt="A4" />
</a>
</div>

<div align="center">

模仿A4纸张的一个hexo极简主题。主打一个简洁，体积小，配置少。



[![](https://img.shields.io/npm/v/hexo-theme-a4?label=VERSION&logo=npm&style=for-the-badge)]()
[![](https://img.shields.io/npm/v/hexo?color=blue&label=hexo&logo=hexo&style=for-the-badge)](https://hexo.io/zh-cn/index.html)
[![](https://img.shields.io/node/v/hexo?style=for-the-badge)](https://nodejs.org/en)

「让读者专注于阅读文字，写者专注于写作。」➡️ [效果展示](https://ninojay.top) ➡️ [使用文档](https://doc.ninojay.top)
  
_右上角一个star，更快更新功能_

</div>


[![](https://jsd.onmicrosoft.cn/npm/hexo-theme-a4@latest/source/img/market.png)](https://github.com/HiNinoJay/hexo-theme-A4)

## 🏹️特点

- [x] 博客网站基本功能：归档/标签/分类/目录
- [x] 首页简历化，word化，内容自定义化
- [x] 页面的页脚页眉自定义
- [x] 文章可单独配置：隐藏文章、开关评论、开关目录、数学公式支持、文章加密访问
- [x] 全局色调配置可自定义，预览多种配色[请点击链接](https://ninojay.top/hexoplugin/A4-color-change/)
- [x] 采用最美评论模块waline
- [x] 预置md可使用的css样式
- [x] 自带CDN加速国内访问速度
- [x] [详细的使用文档](https://doc.ninojay.top)
- [x] [A4可支持hexo插件使用文档](https://ninojay.top/tags/hexoPlugin/)


## 🔥效果展示

### 多种主题配色
本主题默认灰白配色，更多配色请看：[点击预览](https://ninojay.top/hexoplugin/A4-color-change/)，你也可以自行修改提交自己喜欢的配色。

### 首页

![](https://jsd.onmicrosoft.cn/npm/hexo-theme-a4@latest/source/img/index.png)

### 文章列表

![](https://jsd.onmicrosoft.cn/npm/hexo-theme-a4@latest/source/img/archive.png)

### 文章标签和分类信息

![](https://jsd.onmicrosoft.cn/npm/hexo-theme-a4@latest/source/img/tags&&categories.png)

### 评论

![](https://jsd.onmicrosoft.cn/npm/hexo-theme-a4@latest/source/img/comment.png)


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
首页和文章列表页需要手动生成，执行以下命令即可：
```shell
hexo new page index
hexo new page list
```
其他详细配置请看：
➡️ [使用文档](https://doc.ninojay.top)，已上线。


## 🍺感谢：
以下开源项目给予我很多灵感，促使我也能来开源这款主题：
- https://github.com/fluid-dev/hexo-theme-fluid
- https://github.com/EvanNotFound/hexo-theme-redefine
- https://github.com/zheli-design/hexo-theme-one-paper


## ☕️支持

如果觉得我做的不错，请给我一个star，感谢。

