# hexo-theme-A4
模仿A4纸张的一个hexo极简主题。主打一个简洁，体积小，开箱即用。

➡️ [效果展示](https://ninojay.top)

## 🏹️特点

- [x] 博客网站基本功能：归档/标签/分类
- [x] 首页简历化，word化
- [x] 页面页脚页眉自定义
- [x] 可配置隐藏文章
- [x] waline评论功能
- [x] 预置md可使用的css样式
- [x] 自定义隐藏文章
- [x] 配置化首部/底部链接
- [x] RSS
- [x] 一键CDN加速

## 🔥效果展示
### 首页

![](/source/img/index.png)

### 归档

![](/source/img/archive.png)

### 评论

![](/source/img/comment.png)

## 如何使用

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

### 首页内容如何产生？

大部分主题首页都采用瀑布流的方式展示主页。我想应该也有朋友会像我一样，只希望首页展示一些介绍信息。

你只需要做如下配置:
- `hexo new page index`  找到 该命令新建的`/source/index`目录下的`index.md`
- 在`index.md`文件添加你想在首页展示的内容
- 访问`localhost:4000`，即可预览`index.md`首页内容

### 如何使用list文章页面？
- 执行命令`hexo new page list`
- 执行命令`hexo s`，访问`localhost:4000/list`查看效果

### 如何添加自己的favicon头像
- 在`source`文件夹下创建`img`文件夹
- 在`img`文件夹中添加你的图片，名称必须为`favicon.webp`

### 如何使用tags标签页面？
- 执行命令`hexo new page tags`
- 执行命令`hexo s`，访问`localhost:4000/list`查看效果

### 如何使用categories分类页面？
- 执行命令`hexo new page categories`
- 执行命令`hexo s`，访问`localhost:4000/categories`查看效果

### 如何使用代码块高亮
- 修改你的博客网站目录下的```_config.yml```文件（注意不是该主题的```_config.a4.yml```文件）
- 设置```_config.yml```中的```highlight```和```prismjs```的```enable为false```
  
### 评论模块如何生效？

新增了waline评论，在waline官网申请好了服务过后，
你只需要做如下配置:
- 在该主题配置文件`_config.a4.yml`中把`comment`设置为`enable: true`，填写waline相关信息
- 启用过后，默认所有新建的`post`都开启评论模块
- 如果你想关闭某个`post`的`comment`，在对应`post`的`front-matter`中添加：`comment: false`即可

### footer链接如何生效？
主题的`_config.a4.yml`文件已支持手动配置。（*~~将来会改为配置化~~*）
添加好了配置，对应手动生成，如：
- `联系`页面，执行命令`hexo new page contact`
- `支持`页面，执行命令`hexo new page support`
- `近邻`页面，执行命令`hexo new page friends`

创建好了命令，即可在`website\source\`路径下看到对应名称的文件夹名，想修改具体页面的内容，在对应名称文件夹下的`index.md`修改即可

举例：
你想修改`联系`页面的内容，只需要修改`website\source\contact\`文件夹下的`index.md`文件即可


## 🍺感谢：
以下开源项目给予我很多灵感，促使我也能来开源这款主题：
- https://github.com/fluid-dev/hexo-theme-fluid
- https://github.com/EvanNotFound/hexo-theme-redefine
- https://github.com/zheli-design/hexo-theme-one-paper


## ☕️支持

如果觉得我做的不错，请给我一个star，感谢。

