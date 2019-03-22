const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)
  //如果这里不是utf8 识别二进制
  // 200是api要求返回的状态
  // response.writeHead(200,{
  //   'Access-Control-Allow-Origin':'*'
  // })
  response.end('123')
}).listen(8887)

console.log('Server listening on 8887')