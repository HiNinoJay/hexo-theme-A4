/* global hexo */

'use strict'

/**
 * 文章图片原生懒加载：渲染时为 <img> 补充 loading="lazy"，
 * 避免一次请求整页图片（post.lazyImage 开关控制，默认开启）
 */
hexo.extend.filter.register('after_post_render', data => {
  if (!hexo.theme.config || !hexo.theme.config.post || hexo.theme.config.post.lazyImage === false) return data
  if (!data.content || data.content.indexOf('<img') === -1) return data
  // 跳过已有 loading 属性的图片，避免产生重复属性
  data.content = data.content.replace(/<img(?![^>]*\bloading=)([^>]*)>/gi, '<img loading="lazy"$1>')
  return data
})
