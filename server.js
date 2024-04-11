const app = require('./src/app.js');

app.listen(3000,()=>{
    console.log('Servidor rodando em http://localhost:3000');
});

// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// // Middleware para análise do corpo da requisição
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Rota para lidar com a solicitação de login
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     // Lendo os dados do arquivo db.json
//     fs.readFile('db.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Erro interno do servidor');
//             return;
//         }
//         const users = JSON.parse(data);
//         const user = users.find(user => user.username === username && user.password === password);
//         if (user) {
//             res.status(200).send('Login bem-sucedido');
//         } else {
//             res.status(401).send('Credenciais inválidas');
//         }
//     });
// });

// // Inicie o servidor
// app.listen(PORT, () => {
//     console.log(`Servidor está rodando na porta ${PORT}`);
// });