require('babel-register');
 
const router = require('./router').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://ayoubelmortaji.github.io/Ayoub-Elmortaji/')
        .save('./sitemap.xml')
);
