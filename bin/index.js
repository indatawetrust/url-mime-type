#! /usr/bin/env node

const request = require('request'),
      fileType = require('file-type'),
      url = require('url')

if (process.argv[2] && url.parse(process.argv[2]).hostname) {
  request(process.argv[2], (err, res, body) => {
  }).on('data', data => {
    if (fileType(data)) console.log(fileType(data))
  })
} else {
  console.log('This is not a url')
}
