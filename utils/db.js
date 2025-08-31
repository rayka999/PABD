const mysql= require('mysql');
/* informar parametros de acesso ao bd */
const db=mysql.createConnection({
    host:'localhost',
    user: 'root', //usuario padrão
    password:'',
    port: 3306,
    database: 'dbbiblioteca',
    multipleStatements: true //garante que possa rodar vários comandos seguidos
})

db.connect((erro)=>{
    if(erro){
        throw erro
    }
    console.log("conectado ao BD")
});

global.db=db;
module.exports=db;