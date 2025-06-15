/* global hexo */

'use strict'

hexo.on('ready', () => {
  if (!/^(g|s)/.test(hexo.env.cmd)) return
  const { version } = require('../../package.json')
  hexo.log.info(`

Welcome.
----------------------------------------------------------------
   ___  ____
  / _ |/ / /
 / __ /_  _/
/_/ |_|/_/                                 Reading and Writing.
-----------------------------------------------------------------
Your hexo-theme-A4 version is ${version}. Maybe it can be updated.
The latest: https://github.com/HiNinoJay/hexo-theme-A4/releases
-----------------------------------------------------------------
`)
})