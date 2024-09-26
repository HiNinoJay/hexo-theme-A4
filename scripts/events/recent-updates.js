/**
 * recent updates page
*/

hexo.extend.generator.register('recent-updates', function(locals){
  return {
    path: 'recent-updates/index.html',
    layout: 'layout',
    data: {
      title: '最近更新列表',
      page: locals.pages.findOne({path: 'recent-updates/index.html'})
    }
  }
});