import test from 'ava';
import urlMimeType from './lib/index';

test('#1', async t => {
  
  const data = await urlMimeType('https://avatars1.githubusercontent.com/u/6845298?v=4&s=460')
  
  t.deepEqual(data, { ext: 'png', mime: 'image/png' })

})
