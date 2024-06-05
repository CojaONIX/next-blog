
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