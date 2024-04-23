const app = require('./mvc/app')

const http = require('http')
const server = http.createServer(app)

server.listen(4000, ()=> {
  console.log('El servidor esta activo');
})