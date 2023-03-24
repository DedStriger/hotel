const fs = require('fs');
fs.copyFile('_redirects', './build/_redirects', (err) => {
  if (err) throw err;
  console.log('_redirects was copied');
});
