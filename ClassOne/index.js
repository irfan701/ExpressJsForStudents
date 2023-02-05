const express = require('express')
const router=require('./src/routes/router')

const app = express()

app.use(express.json()) // for parsing application/json

app.get('/', function (req, res) {
    res.send('Home Page')
})
app.get('/contact', function (req, res) {
    res.send('Contact Page')
})
app.get('/about', function (req, res) {
    res.send('About Page')
})
app.post('/insert',function (req,res) {
    res.json(req.body)
   // console.log('Post Method')
})

app.all('/secret', function (req, res, next) {
    res.json(req.body)
    // res.send('Accessing the secret section ...');
    console.log('Accessing the secret section ...')
    //  next() // pass control to the next handler
})

app.get('/user/:idx/:name', function (req, res) {
    var id=req.params.idx
    let name=req.params.name
    res.send(id+''+name);
})


app.route('/events')
    .get(function (req, res) {
        res.send("I am GET")
    })
    .post(function (req, res) {
        res.send("I am Post")
        res.end();
    })

app.get('/session', function (req, res) {
    app.set('title', {name:"irfan",age:'21'})
    var data=app.get('title') // "My Site"
    console.log(data)
    res.json(data)
})

app.use("/api/v1",router)

app.listen(3000,()=>{
    console.log("Server Run @ 3000")
})

// module.exports=app
