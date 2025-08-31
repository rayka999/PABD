var express = require('express');
let db= require("../utils/db")
var router = express.Router();

router.get('/listar', function(req, res) {
  // Usando template literals para montar a query SQL de forma mais limpa
  const cmd = `
    SELECT 
      IdAutor,          
      NoAutor,          
      NoNacionalidade  
    FROM TbAutor AS a
    INNER JOIN TbNacionalidade AS n
      ON a.IdNacionalidade = n.IdNacionalidade
    ORDER BY NoAutor   
  `;

  // Executa a consulta no banco de dados
  db.query(cmd, [], function(erro, listagem) {
    if (erro) {
      // Se houver erro no banco, retorna status 500 com detalhes do erro
      return res.status(500).send(erro);
    }

    // Renderiza a view 'autores-lista' e envia a listagem como objeto
    res.render('autores-lista', { resultado: listagem });
  });
});

router.get('/add', function(req, res) {
  res.render('autores-add',{resultado:{}});
})

router.post('/add', function(req, res) {
    let nome=req.body.nome;
    let nacionalidade=req.body.nacionalidade;
  // Usando template literals para montar a query SQL de forma mais limpa
  const cmd = `INSERT INTO TbAutor (NoAutor,IdNacionalidade) VALUES (?,?)`;

  // Executa a consulta no banco de dados
  db.query(cmd, [nome,nacionalidade], function(erro) {
    if (erro) {
      // Se houver erro no banco, retorna status 500 com detalhes do erro
      return res.status(500).send(erro);
    }
    res.redirect('/autores/listar');
  });
});

router.get('/editar/:id', function(req, res) {
  let id=req.params.id;
    // Usando template literals para montar a query SQL de forma mais limpa
  const cmd = `
    SELECT 
      IdAutor,          
      NoAutor,          
      IdNacionalidade
      FROM TbAutor WHERE IdAutor=?;`;
  // Executa a consulta no banco de dados
  db.query(cmd, [id], function(erro, listagem) {
    if (erro) {
      // Se houver erro no banco, retorna status 500 com detalhes do erro
      return res.status(500).send(erro);
    }

    // Renderiza a view 'autores-lista' e envia a listagem como objeto
    res.render('autores-add', { resultado: listagem[0] });
  });
});

router.put('/editar/:id', function(req, res) {
    let id= req.params.id;
    let nome=req.body.nome;
    let nacionalidade=req.body.nacionalidade;
  // Usando template literals para montar a query SQL de forma mais limpa
  const cmd = `UPDATE TbAutor SET NoAutor=?,IdNacionalidade=? WHERE IdAutor=?;`;
  db.query(cmd, [nome,nacionalidade,id], function(erro) {
    if (erro) {
      // Se houver erro no banco, retorna status 500 com detalhes do erro
      return res.status(500).send(erro);
    }
    res.redirect(303,'/autores/listar'); //303 redireiona rotas com metodos diferentes
  });
});

router.delete('/deletar/:id', function(req, res) {
    let id= req.params.id;
  const cmd = `DELETE FROM TbAutor WHERE IdAutor=?;`;
  db.query(cmd, [id], function(erro) {
    if (erro) {
      // Se houver erro no banco, retorna status 500 com detalhes do erro
      return res.status(500).send(erro);
    }
    res.redirect(303,'/autores/listar'); //303 redireiona rotas com metodos diferentes
  });
});

module.exports = router;