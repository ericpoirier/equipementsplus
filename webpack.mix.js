mix = require('laravel-mix');
//mix.options({uglify: {uglifyOptions: {compress: false, output: {comments: true}}}});

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less('./less/styles.less', 'static/css/styles.css');