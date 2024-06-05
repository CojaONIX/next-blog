
export default async function getAllProducts(limit = 9) {

    const response = await fetch(process.env.PRODUCT_API_URL + "/products?select=id,title,description&limit=" + limit);
    return await response.json();

}

export async function getProductByID(productID) {

    const response = await fetch(process.env.PRODUCT_API_URL + "/products/" + productID);
    if(response.status === 404) {
        return false;
    }

    return await response.json();

}