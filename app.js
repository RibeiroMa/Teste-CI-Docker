const express = require('express')
const app = express()
const port = 300

app.get('/', (req, res) => {
    res.send('Modelo de uma Imagem')
});

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)

})

