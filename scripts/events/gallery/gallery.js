
var renderer = require('./renderer');

hexo.config.lightgallery = Object.assign({
    js: 'https://jsd.onmicrosoft.cn/npm/hexo-theme-a4@latest/source/js/lightgallery.min.js',
    css: 'https://jsd.onmicrosoft.cn/npm/hexo-theme-a4@latest/source/css/lightgallery.min.css',
    plugins: {},
}, hexo.config.lightgallery);

hexo.extend.filter.register('after_post_render',renderer.render,9);