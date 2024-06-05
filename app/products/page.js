import Image from "next/image";

export default async function Products() {

    const response = await fetch("https://dummyjson.com/products?limit=0");
    const data = await response.json();

    return (
        <>
            <h1>Products Page</h1>
            {data.products.map(function(item, index) {
                let url = "/products/" + item.id;
                return (
                    <>
                        <br/>
                        <h4><a href={url}>{item.id} - {item.title}</a></h4>
                        <p>{item.description}</p>
                    </>
                    )
            })}

        </>
    )
}