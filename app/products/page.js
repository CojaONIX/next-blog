import getAllProducts from "../../src/services/productService";

export default async function Products() {

    const data = await getAllProducts(0)

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