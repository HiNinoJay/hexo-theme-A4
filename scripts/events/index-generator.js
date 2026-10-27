'use strict';

const { createRequire } = require('module');

// Resolve the same pagination package used by hexo-generator-index, including
// when it is installed as a nested dependency of that plugin.
const requireIndex = createRequire(require.resolve('hexo-generator-index'));
const pagination = requireIndex('hexo-pagination');

hexo.extend.generator.register('index', function(locals) {
  const config = this.config;
  const indexConfig = config.index_generator;
  const posts = locals.posts
    .filter(post => post.hide !== true)
    .sort(indexConfig.order_by);

  // Place theme `top` posts first, in the same order as list.ejs. Then keep
  // Hexo's normal sticky-post ordering for the remaining posts.
  posts.data.sort((a, b) => {
    const aIsTop = Object.prototype.hasOwnProperty.call(a, 'top');
    const bIsTop = Object.prototype.hasOwnProperty.call(b, 'top');

    if (aIsTop && bIsTop) return a.top - b.top;
    if (aIsTop) return -1;
    if (bIsTop) return 1;
    return (b.sticky || 0) - (a.sticky || 0);
  });

  const paginationDir = config.pagination_dir || 'page';
  const path = indexConfig.path || '';

  return pagination(path, posts, {
    perPage: typeof indexConfig.per_page === 'undefined' ? 10 : indexConfig.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: { __index: true }
  });
});
