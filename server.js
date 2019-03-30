const http = require('http')
const fs =require('fs')

http.createServer(function (request,response){
  console.log('request come',request.url)
  
  if (request.url === '/'){
    const html = fs.readFileSync('test.html', 'utf8')
    // 如果这里不是utf8 识别二进制
    response.writeHead(200, {
      'Content-Type': 'text/html',
      
    })
    response.end(html)
  }
  // 做一个路径的判断
  if (request.url === '/script.js'){

    console.log(request.headers)
    const etag = request.headers['if-none-match']
    if (etag === '777'){
      
      response.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=20000000,no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('123')
    } 
    else {
       response.writeHead(200, {
         'Content-Type': 'text/javascript',
         'Cache-Control': 'max-age=20000000, no-cache',
         'Last-Modified': '123',
         'Etag': '777'
       })
      response.end('console.log("script loaded twice")')
    }
   
  }
}).listen(8888)

console.log('Server listening on 8888')