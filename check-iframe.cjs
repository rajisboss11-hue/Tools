const https = require('https');

https.get('https://chkr.cc/', (res) => {
  console.log('x-frame-options:', res.headers['x-frame-options']);
  console.log('content-security-policy:', res.headers['content-security-policy']);
}).on('error', (e) => {
  console.error(e);
});
