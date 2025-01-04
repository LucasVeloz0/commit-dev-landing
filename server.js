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

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Exemplo de rota de API
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});