export const fetchProducts = async (index) => {
    try {
        const data = await fetch(`http://localhost:4001/products?from=${index}`);
        return await data.json();
    } catch (error) {
        console.log('fetchProducts error', error)
    }
}

export const fetchProductsByName = async (text, startIndex) => {
    try {
        const data = await fetch(`http://localhost:4001/products/getbyname?name=${text}&from=${startIndex}`);
        return await data.json();

    } catch (error) {
        console.log('fetchProductsByName error', error)
    }
}
