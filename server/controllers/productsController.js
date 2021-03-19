const products = require('../data.json');

// By Default return 10 objects from the json array
const get_all_products = (req, res) => {
    const { from, count = 10 } = req.query;
    if (from === undefined || from === null) {
        return res.json(products);
    } else {
        const fromIndex = parseInt(from);
        const howMany = parseInt(count);

        const _data = products.slice(fromIndex, fromIndex + howMany);
        return res.json(_data);
    }
};


module.exports = {
    get_all_products,
};