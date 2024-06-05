
export default async function Products() {

    const response = await fetch("https://dummyjson.com/products?limit=0");
    const data = await response.json();

    return (
        <>
            <h1>Products Page</h1>
            {data.products.map(function(item, index) {
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