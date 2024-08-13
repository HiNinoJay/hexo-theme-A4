
var renderer = require('./renderer');

hexo.config.lightgallery = Object.assign({
    js: '../../../js/lightgallery.min.js',
    css: '../../../css/lightgallery.min.css',
    plugins: {},
}, hexo.config.lightgallery);

hexo.extend.filter.register('after_post_render',renderer.render,9);