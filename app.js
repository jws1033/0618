var express = require('express')

var path = require('path')
const { request } = require('http')
const { response } = require('express')

var app = express()

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.json())

app.get('/hello', (request , response)=>{
    response.render('hello.ejs')
})
var port =8000;
app.listen(port, ()=>{
    console.log('server is runing at http:localhost:8080')
})