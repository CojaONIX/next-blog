import Image from "next/image";

export default async function ProductID({params}) {
    const response = await fetch("https://dummyjson.com/products/" + params.ID);
    const data = await response.json();

    return (
        <>
            <h1>Product Page</h1>
            <hr/>

            <h2>{data.title} ({data.category})</h2>
            <p>{data.description}</p>
            <h3>Price: {data.price}</h3>

            <div>
                <Image src={data.thumbnail} alt={data.sku} width={300} height={300} />
                <br/>
                {data.images.map((image, index) => (
                    <Image key={index} src={image} alt={data.sku} width={100} height={100} />
                ))}

            </div>

            <hr/>
            <pre>{JSON.stringify(data, null, 4)}</pre>

        </>
    )
}