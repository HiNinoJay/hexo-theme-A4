'use strict';

const { createRequire } = require('module');
const requireIndex = createRequire(require.resolve('hexo-generator-index'));
const pagination = requireIndex('hexo-pagination');

function isListPage(page) {
  return /^list(?:\/index\.html|\/$|$)/.test(page.path);
}

hexo.extend.generator.register('page', function(locals) {
  const result = [];
  let listPage;

  locals.pages.forEach(page => {
    if (isListPage(page)) {
      listPage = page;
      return;
    }

    const { path, layout } = page;
    if (!layout || layout === 'false' || layout === 'off') {
      result.push({ path, data: page.content });
      return;
    }

    const layouts = ['page', 'post', 'index'];
    if (layout !== 'page') layouts.unshift(layout);
    page.__page = true;
    result.push({ path, layout: layouts, data: page });
  });

  if (!listPage || !this.theme.config.list.pagination) {
    if (listPage) {
      const { path, layout } = listPage;
      const layouts = ['page', 'post', 'index'];
      if (layout !== 'page') layouts.unshift(layout);
      listPage.__page = true;
      result.push({ path, layout: layouts, data: listPage });
    }
    return result;
  }

  const posts = locals.posts
    .filter(post => post.hide !== true)
    .sort(this.config.index_generator.order_by || '-date');

  // The list template treats every post with a `top` field as pinned.
  posts.data.sort((a, b) => {
    const aIsTop = Object.prototype.hasOwnProperty.call(a, 'top');
    const bIsTop = Object.prototype.hasOwnProperty.call(b, 'top');
    if (aIsTop && bIsTop) return a.top - b.top;
    if (aIsTop) return -1;
    if (bIsTop) return 1;
    return (b.sticky || 0) - (a.sticky || 0);
  });

  const pages = pagination('list/', posts, {
    perPage: typeof this.config.index_generator.per_page === 'undefined' ? 10 : this.config.index_generator.per_page,
    layout: ['page', 'post', 'index'],
    format: (this.config.pagination_dir || 'page') + '/%d/'
  });

  pages.forEach(generated => {
    generated.data = Object.assign({}, listPage, generated.data, { __page: true });
  });

  return result.concat(pages);
});
