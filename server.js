const http = require('http')
const fs =require('fs')

http.createServer(function (request,response){
  console.log('request come',request.url)
  
  if (request.url === '/'){
    const html = fs.readFileSync('test.html', 'utf8')
    // 如果这里不是utf8 识别二进制
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }
  // 做一个路径的判断
  if (request.url === '/script.js'){
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age-200'
    })
    response.end('console.log("script loaded")')
  }
}).listen(8888)

console.log('Server listening on 8888')