
export default async function Products() {

    const response = await fetch(process.env.PRODUCT_API_URL + "/products?limit=0&select=id,title,description");
    const data = await response.json();

    return (
        <>
            <h1>Products Page</h1>
            {data.products.map((item, index) => {
                return (
                    <a href={"/products/" + item.id} key={index}>
                        <div className="product">
                            <h4>{item.id} - {item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </a>
                    )
            })}

        </>
    )
}