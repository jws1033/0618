var express = require('express')
var mysql = require('mysql')
var router = express.Router()
sql_config = {
    host:'localhost',
    user:'root',
    password:'1234',
    database:'o2'
}
var db = mysql.createConnection(sql_config)
router.get('/topic/add',(req, res)=>{
    var sql = 'SELECT * FROM topic';
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err) 
           res.status(500).send("Internal Server Error")
        }
 console.log(result)
 res.render("add",{topics:result})
})
})
router.post('/topic/add',(req,res)=> {
    res.send("sucess")
})


router.get(['/topic','/topic/:id'] , (req, res)=>{
    var sql =`SELECT * FROM topic`
    db.query(sql, (err, results)=>{
        var id = req.params.id
        
        
        if(id){
            // var sql = 'SELECT * FROM topic WHERE id='+id
            var sql =`SELECT * FROM topic WHERE id=${id}`
            console.log(id)
            db.query(sql,(err , result)=>{
                if(err) {
                    console.log(err)
                } 
                console.log(result[0])
                res.render('view',{topics:results,topic:result[0] })
            })
        } else{
            res.render('view', {topics:results,topic:undefined})
        }
    })
})

module.exports = router;