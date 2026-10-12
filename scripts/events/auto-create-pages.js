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
    fs.writeFileSync(file, `---\ntitle: ${name}\ndate: ${now()}\n---\n`)
    hexo.log.info(`Created page: source/${name}/index.md`)
  })
})
