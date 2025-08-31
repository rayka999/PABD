var express = require('express');
let db= require("../utils/db")
var router = express.Router();

router.get('/listar', function(req, res) {
  // Usando template literals para montar a query SQL de forma mais limpa
  const cmd = `
    SELECT 
      IdNacionalidade,                   
      NoNacionalidade  
    FROM TbNacionalidade ORDER BY NoNacionalidade `;

  // Executa a consulta no banco de dados
  db.query(cmd, [], function(erro, listagem) {
    if (erro) {
      // Se houver erro no banco, retorna status 500 com detalhes do erro
      return res.status(500).send(erro);
    }

    res.json({ resultado: listagem });
  });
});

module.exports = router;