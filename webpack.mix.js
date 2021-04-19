let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js')
.sass('src/scss/main.scss', 'css')
    .options({
        processCssUrls: false
     })
    .setPublicPath('dist');