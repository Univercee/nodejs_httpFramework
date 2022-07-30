import http from 'http'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 8000


const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    res.end("Server is online")
})
server.listen(PORT, ()=>{
    console.log("Server started on PORT "+PORT);
})