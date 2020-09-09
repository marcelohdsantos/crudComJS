const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')
const handlebars = require('express-handlebars')
const { query } = require('express')
const app = express()
const urlencondeParser = bodyParser.urlencoded({extended: false})
//conection postgres
var conString = "postgres://postgres:biaemanu@localhost:5432/nodejs";
var client = new pg.Client(conString)
client.connect()


//template engine
app.engine("handlebars", handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars') //setando o engine e o handlenars
// app.use('/css', express.static('css')) //chamando o arquivo de estilo usando o USE
// app.use('js', express.static('js')) //chamando o arquivo de script
// app.use('img', express.static('img')) //chamando o diretório de imagem, caso seja necessário

//routes and templates
app.get("/", function(req, res){
    // //res.send("Essa é a minha página inicial")
    // res.sendFile(__dirname+"/index.html") //o __dirname pega a raiz absoluta do app
    //console.log(req.params.id) //pegar o id da app
    res.render('index') //chamar o layout utiliza-se o render, passandi o id como parâmtro para a página
})

app.get("/javascript", function(req, res){
    res.sendFile(__dirname + '/js/javascript.js')
})

app.get("/style", function(req, res){
    res.sendFile(__dirname + '/css/style.css')
})

app.get('/criar', function(req, res){
    res.render("criar")
})

app.post("controllerForm", urlencondeParser, function(req, res){
    console.log(req.body.name)
})

//Start server
app.listen(3000, function(req, resp){
    console.log('Servidor rodando...')
})