const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000 )
const server = http.createServer(app)

require('./socket').connect(server)

app.use(express.static(path.join(__dirname,'public')))

server.listen(app.get('port') , ()=>{
    console.log(`server on start http://localhost:${app.get('port')}`)
})

module.exports = server


