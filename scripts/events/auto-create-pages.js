/* global hexo */

'use strict'

const fs = require('fs')
const path = require('path')

/**
 * 启动时自动创建首页 index 与文章列表 list 页面（仅当文件不存在时创建，不覆盖已有内容），
 * 免去手动执行 `hexo new page index` / `hexo new page list`
 *
 * index 页面：提供首页正文内容（layout/index.ejs 会读取 index/index.html 的内容）
 * list  页面：文章列表页，url 为 /list/
 */
const PAGES = ['index', 'list']
const INDEX_CONTENT = '欢迎您使用A4主题：<br><br>' +
  '<center>「让读者专注于阅读文字，写者专注于写作」</center><br><br>' +
  'ps:最新版A4已支持安装主题后，首次 `hexo s` 命令启动就为你自动生成index页面（你正看到的页面）和list页面。<br><br>' +
  '无需你自己再去执行`hexo new page index`和 `hexo new page list` 命令。 <br><br>' +
 '你可以直接去修改配置文件配置你自己的A4了，比如说先显示index首页和list页面按钮：<br>1.menu的‘首页和‘文章’前的注释打开 <br>2.showInMenu的‘文章’注释打开  <br>3.重新启动查看效果。'

function pad(n) {
  return n < 10 ? '0' + n : '' + n
}

function now() {
  const d = new Date()
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

hexo.on('ready', () => {
  if (!/^(g|s|d)/.test(hexo.env.cmd)) return

  PAGES.forEach(name => {
    const file = path.join(hexo.base_dir, 'source', name, 'index.md')
    if (fs.existsSync(file)) return

    fs.mkdirSync(path.dirname(file), { recursive: true })
    const content = name === 'index' ? INDEX_CONTENT : ''
    if(name === 'index') {
      fs.writeFileSync(file, `---\ntitle: ${name}\ndate: ${now()}\n---\n\n${content}\n`)
    } else {
      fs.writeFileSync(file, `---\ntitle: ${name}\ndate: ${now()}\n---\n`)
    }
    
    hexo.log.info(`Created page: source/${name}/index.md`)
  })
})
