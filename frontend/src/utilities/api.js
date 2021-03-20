export const fetchProducts = async (index) => {
    const data = await fetch(`http://localhost:4001/products?from=${index}`);
    return await data.json();
}

