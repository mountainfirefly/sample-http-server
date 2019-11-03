var http = require('http')

var server = http.createServer((request, response) => {
  console.log(request.url)
  switch(request.url) {
    case '/test':
      response.write('Testing')
      break;
    case '/hello':
      response.write('Hello, Pankaj Thakur')
      break;
    default:
      response.write('Welcome to your HTTP server!')
  }
  response.end()
})

server.listen(3000)
