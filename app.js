const express = require('express');
const { link } = require('fs');
const app = express();
app.use(express.static('views'));

app.get('/home', (request, response) => {
    response.send(/views/index.html);
})

app.listen(3000, () => ('My first app listening on port 300'));
