/* global hexo */

'use strict'

const { stripHTML } = require('hexo-util')

/**
 * 站内搜索数据生成器：生成 /search.xml（格式与 hexo-generator-search 一致）。
 * 主题 `tool.search` 开启后无需安装额外插件即可使用搜索；关闭时不输出。
 */
hexo.extend.generator.register('search', function (locals) {
  const tool = (hexo.theme.config && hexo.theme.config.tool) || {}
  if (!tool.search) return []

  const escapeHTML = str => String(str == null ? '' : str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const root = hexo.config.root || '/'
  let xml = '<?xml version="1.0" encoding="utf-8"?><search>'

  locals.posts.sort('-date').each(post => {
    if (post.hide) return
    const link = root + String(post.path || '').replace(/index\.html$/, '')
    xml += '<entry>'
    xml += '<title>' + escapeHTML(post.title) + '</title>'
    xml += '<url>' + escapeHTML(link) + '</url>'
    xml += '<content type="html">' + escapeHTML(stripHTML(post.content || '')) + '</content>'
    xml += '</entry>'
  })

  xml += '</search>'

  return {
    path: 'search.xml',
    data: xml
  }
})
