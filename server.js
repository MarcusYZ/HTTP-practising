const http = require('http')
const fs =require('fs')

http.createServer(function (request,response){
  console.log('request come',request.url)
  const html =fs.readFileSync('test.html','utf8')
  // 如果这里不是utf8 识别二进制
  response.writeHead(200,{
    'Content-Type': 'text/plain'
  })
  response.end(html)
}).listen(8888)

console.log('Server listening on 8888')