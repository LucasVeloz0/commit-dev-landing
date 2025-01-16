const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Permite todas as origens
app.use(cors());

// Ou configure CORS para permitir apenas origens específicas
// app.use(cors({
//   origin: 'https://commit.dev.br' // Substitua pela origem do seu frontend
// }));

// Configura o cache para arquivos estáticos
app.use(express.static(path.join(__dirname, 'build'), {
  maxAge: '1d',  // Cache de 1 dia para arquivos estáticos
  etag: false,   // Desabilita o uso de ETag (opcional)
}));

// Resto da configuração do servidor, como a rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});