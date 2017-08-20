# url-mime-type
Url mime type finder

```sh
npm i -S url-mime-type
```

```js
const urlMimeType = require('url-mime-type')

urlMimeType('https://avatars1.githubusercontent.com/u/6845298?v=4&s=460').then(console.log)
```

```
{ ext: 'png', mime: 'image/png' }
```

or

```sh
npm i -g url-mime-type
```

```
url-mime-type https://avatars1.githubusercontent.com/u/6845298?v=4&s=460
```

```
{ ext: 'png', mime: 'image/png' }
```
