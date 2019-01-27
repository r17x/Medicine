#!/usr/bin/env node
const sharp = require('sharp')
const listSize = [500, 192, 150, 64]
const original = sharp('./public/logo.png')

listSize.forEach(imgSize => {
  original
    .resize(imgSize, imgSize)
    .toFile(`./public/logo${imgSize}.png`)
    .then(res => {
      console.log(`Generated Logo with Size: ${imgSize} is OK!`)
    })
})
