var express = require('express')
var path = require('path')
var mysql = require('mysql')
var apiRouter = require('./routes/api_router')
var app = express()
sql_config = {
    host:'localhost',
    user:'root',
    password:'1234',
    database:'o2'
}
var db = mysql.createConnection(sql_config)



db.connect()
app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',apiRouter)
app.get('/hello', (request , response)=>{
    var name = "우성"
    response.render('hello', {data:name})
})

app.get('/data', (req, res)=>{
    var sql = 'SELECT * FROM topic '
    db.query(sql , (err , result)=>{
        if(err){
            console.log(err)
        }else {
                console.log(result[0].description)
                // res.send(result[0].author'수업은'+result[0].title)
                // res.send(`${result[0].author} 수업은 ${result[0].title}`)
                res.render('data', {data:result})
            }
        
    })
})

var port =8000;
app.listen(port, ()=>{
    console.log(`Server is Runing at http://localhost:${port}`)
})

