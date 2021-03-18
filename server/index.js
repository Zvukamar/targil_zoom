const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.status(200).send("Basic get request");
});

app.listen(PORT, () => {
    console.log(`Listenning on port ${PORT}`);
});