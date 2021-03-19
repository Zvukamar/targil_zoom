const express = require('express');
const { products } = require('./routes');

const app = express();
const PORT = process.env.PORT || 4001;

app.use('/products', products);
app.get('/', (req, res, next) => {
    res.status(404).json({});
});

app.listen(PORT, () => {
    console.log(`Listenning on port ${PORT}`);
});