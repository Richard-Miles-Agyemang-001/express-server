const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Welcome to our new page')
res.end()
})

server.listen(5000)