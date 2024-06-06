
export default async function getAllProducts(limit = 9) {

    const response = await fetch(process.env.PRODUCT_API_URL + "/products?select=id,title,description&limit=" + limit, {
        next: {
            revalidate: 3600,
        }
    });

    return await response.json();
}

export async function getProductByID(productID) {

    const response = await fetch(process.env.PRODUCT_API_URL + "/products/" + productID);
    if (!response.ok) {
        return false;
    }

    return await response.json();
}

export async function searchProductByQuery(query) {

    const response = await fetch(process.env.PRODUCT_API_URL + "/products/search?q=" + query);
    if (!response.ok) {
        return false;
    }

    return await response.json();
}

export function addProduct(title, price, description) {
    fetch(process.env.PRODUCT_API_URL + '/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            price: price,
            description: description
        })
    })
        .then(res => res.json())
        .then(console.log);
}