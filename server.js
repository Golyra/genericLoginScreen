const express = require('express');
const app = express();
const PORT = 3000;

app.post('/0', (req, res) => {
    res.send('POST recebido em /0');
});

app.listen(PORT, () => {
    console.log(`Servidor está ouvindo na porta ${PORT}`);
});