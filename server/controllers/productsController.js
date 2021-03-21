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

const get_products_by_name = (req, res) => {
    const { name, from = 0 } = req.query;
    if (!name) {
        const _data = products.slice(0, 10);
        return res.json({ data: _data, lastIndex: 0 });
    } else {
        const _data = [];
        let lastIndex = 0;
        // return 10 new products if found
        products.slice(from).forEach((product, index) => {
            if (_data.length === 10) return;
            else if (product.name.indexOf(name) !== -1) {
                _data.push(product);
                lastIndex = index;
            }
        });
        return res.json({ data: _data, lastIndex });
    }
}


module.exports = {
    get_all_products,
    get_products_by_name
};