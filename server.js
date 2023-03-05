const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/inicio', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/tabela', (req, res)=>{
    res.sendFile(__dirname + '/public/Tabela.html')
})

app.get('/contato', (req, res)=>{
    res.sendFile(__dirname + '/public/contato.html')
})

app.listen(8050)