const fs = require('fs');
const https = require('https');
const fileUrl = 'https://files.pidruchnyk.com.ua/uploads/book/11-klas-ukrajinska-mova-avramenko-2019.pdf'
const fileName = 'READ.pdf'

https.get(fileUrl, (res) => {
  const file = fs.createWriteStream(fileName);
  res.pipe(file);
  
  file.on('finish', () => {
    console.log('Download complete.');
    file.close();
  });
})