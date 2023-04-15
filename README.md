# hexo-theme-A4
模仿A4纸张的一个hexo极简主题。主打一个简洁。

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
- 执行命令：`git clone git@github.com:HiNinoJay/hexo-theme-A4.git themes/A4`
- 执行命令：`hexo s` 运行项目查看效果

## ⚠️必读配置

### 首页内容如何产生？

大部分主题首页都采用瀑布流的方式展示主页。我想应该也有朋友会像我一样，只希望首页展示一些介绍信息。

你只需要做如下配置:
- `hexo new post  xxx`  或者 找到已有`/source`目录下的`xxx.md`
- 在新建的`xxx.md`文件`front-matter`中添加：`index:true`
- 访问`localhost:4000`，即可展示`xxx.md`内容

你可以设置多个`post`的`front-matter`中添加：`index:true`，内容都将显示到主页

### 如何使用list文章页面？
- 执行命令`hexo new page list`
- 修改该页面的`front-matter`，新增：`layout: list`
- 执行命令`hexo s`，访问localhost:4000/list查看效果
### 如何使用代码块高亮
- 修改你的博客网站目录下的```_config.yml```文件（注意不是该主题下的```_config.yml```文件）
- 设置```_config.yml```中的```highlight```和```prismjs```的```enable是否为true```
  
### 评论模块如何生效？

新增了waline评论，在waline官网申请好了服务过后，
你只需要做如下配置:
- 在该主题配置文件`_config`中把`comment`设置为`enable: true`，填写waline相关信息
- 启用过后，默认所有新建的`post`都开启评论模块
- 如果你想关闭某个`post`的`comment`，在对应`post`的`front-matter`中添加：`comment: false`即可
### footer链接如何生效？
目前已在footer底部栏默认有三个`<a>链接`（*将来会改为配置化*）
需要手动生成：
- `联系`页面，执行命令`hexo new page contact`
- `支持`页面，执行命令`hexo new page support`
- `近邻`页面，执行命令`hexo new page friends`

创建好了命令，即可在`website\source\`路径下看到对应名称的文件夹名，想修改具体页面的内容，在对应名称文件夹下的`index.md`修改即可

举例：
你想修改`联系`页面的内容，只需要修改`website\source\contact\`文件夹下的`index.md`文件即可

## 🏹️TODO

- [x] waline评论功能
- [x] a标签互动颜色改变
- [x] header加入头像
- [x] 首页的差异化，页面接近A4纸，相比于归档页面宽度更窄
- [x] 首页展示为自定义post页面(待配置化)
- [x] footer新增a标签（待配置化）
- [x] 归档页面自动年份分隔且统计该年文章数量（待自动化）
- [x] 首页简历化，和主要内容做区分（待配置化）（待从源代码复制过来）
- [ ] 文章目录
- [ ] 归档页面搜索功能
- [ ] RSS
- [ ] 新增404页面
- [ ] 更新至npm
- [ ] 写关于本主题的使用手册的博客
- [ ] readme翻译至英语

## 🍺感谢：
以下开源项目给予我很多灵感，促使我也能来开源这款主题：
- https://github.com/fluid-dev/hexo-theme-fluid
- https://github.com/EvanNotFound/hexo-theme-redefine
- https://github.com/zheli-design/hexo-theme-one-paper


## ☕️支持

如果觉得我做的不错，请给我一个start，感谢。

