/*
Author: Viktor (victor318x@gmail.com)
craco.config.js (c) 2021
Desc: description
Created:  2021/1/30 下午4:14:14
Modified: 2021/1/30 下午4:22:07
*/

const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@apis': pathResolve('src/apis'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@stores': pathResolve('src/stores'),
      '@utils': pathResolve('src/utils'),
      '@layouts': pathResolve('src/layouts'),
      '@routers': pathResolve('src/routers'),
      '@constants': pathResolve('src/constants'), 
    }
  },
};
