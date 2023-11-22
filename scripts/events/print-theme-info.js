/* global hexo */

'use strict'

hexo.on('ready', () => {
  if (!/^(g|s)/.test(hexo.env.cmd)) return
  const { version } = require('../../package.json')
  hexo.log.info(`
-------------------------------------------------------
   ___  ____
  / _ |/ / /
 / __ /_  _/
/_/ |_|/_/            Reading and writing.
--------------------------------------------------------
The latest hexo-theme-A4 version is ${version}.
url: https://github.com/HiNinoJay/hexo-theme-A4/releases
--------------------------------------------------------
`)
})