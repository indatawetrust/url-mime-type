const request = require('request'),
      fileType = require('file-type'),
      Url = require('url')

module.exports = url => {
  if (url && Url.parse(url).hostname) {
    return new Promise((resolve, reject) => {
      request(url, (err, res, body) => {
      }).on('data', data => {
        if (fileType(data)) resolve(fileType(data))
      })
    })
  } else {
    return 'this is not a url';
  }
}
