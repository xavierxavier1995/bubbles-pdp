const https = require('https');

https.get('https://www.bubbles.com.br/products/shampoo-pet-neutralizador-pineapple-essential-5l-1-5', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const images = data.match(/https:\/\/[^"'\s]+\.(?:png|jpg|jpeg|webp|svg)/g);
    console.log("Images:", images ? [...new Set(images)].slice(0, 20) : []);
    
    const colors = data.match(/#[0-9a-fA-F]{6}/g);
    console.log("Colors:", colors ? [...new Set(colors)].slice(0, 20) : []);
    
    // Let's also grab some text content
    const title = data.match(/<title>(.*?)<\/title>/);
    console.log("Title:", title ? title[1] : '');
    
    const price = data.match(/price":\s*(\d+\.\d+)/);
    console.log("Price:", price ? price[1] : '');
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
