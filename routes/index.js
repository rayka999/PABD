var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports=router

/*
router.get('/sobre', function(req, res) {
  res.send("<h2>Sobre Rotas...</h2>")
});

router.get('/ola/:nome', function(req, res) {
  res.send("<h2>Olá "+ req.params.nome+"</h2>")
});

router.get('/imc', function(req, res) {
  let peso= req.query.peso;
  let estatura=req.query.estatura;

  let imc=peso/ (estatura*estatura);
  let msg=`<h3> Seu imc é ${imc.toFixed(2)}</h3>` 
  res.send(msg)
});

let autores=["Dracon","Machado de Assis"];
router.use(express.urlencoded({extended: true}));

router.get('/autores', function(req, res) {
  res.json(autores);
});

router.get('/autores/consulta/:id', function(req, res) {
  let id=req.params.id;
  res.json(autores[parseInt(id)-1])
});

router.post('/autores/inclui', function(req, res) {
  let nome=req.body.nome;
  autores.push(nome);
  res.json(autores);
});

router.put('/autores/altera/:id', function(req, res) {
  let id= req.params.id;
  let nome=req.body.nome;

  autores[parseInt(id)-1]=nome;
  res.json(autores);
});

router.delete('/autores/exclui/:id', function(req, res) {
  let id= req.params.id;

  autores.splice(parseInt(id)-1,1);
  res.json(autores);
}); */