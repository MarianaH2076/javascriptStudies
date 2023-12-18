import fs from "fs";
import path from "path";
import http from "http";

const caminho = path.resolve("./src/api/products.json")

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" })
    fs.readFile(caminho, {encoding: "utf-8"}, (error, data) => {
        if (error){
            console.log("Erro")
        }

        response.end(data)
        // JSON.stringify()
    })
})

server.listen(3000, () => {
    console.log("Server staterd at port 3000")
})