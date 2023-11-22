/**
 * 404 error page
*/

hexo.extend.generator.register('404', function(locals){
    return {
      path: '404.html',
      layout: 'layout',
      data: {
        title: 'Page Not Found',
        page: locals.pages.findOne({path: '404.html'})
      }
    }
  });