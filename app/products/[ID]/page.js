import Image from "next/image";

export default async function ProductID({params}) {
    const response = await fetch("https://dummyjson.com/products/" + params.ID);
    const data = await response.json();

    const stars = "<span>X</span><span>X</span><span>X</span>";

    return (
        <>
            <h1>Product Page</h1>
            <hr/>

            <h2>{data.title} ({data.category})</h2>
            <p>{data.description}</p>
            <br/>
            <h3>Price: {data.price}</h3>
            <hr/>

            <div>
                <Image src={data.thumbnail} alt={data.sku} width={300} height={300} />
                <br/>
                {data.images.map((image, index) => (
                    <Image key={index} src={image} alt={data.sku} width={100} height={100} />
                ))}
            </div>

            <hr/>
            <h2>Reviews:</h2>
            {data.reviews.map((review) => (
                <div key={review} className='review'>
                    <h3>{review.reviewerName}</h3>
                    <div>
                    {Array.from({ length: review.rating }, (_, index) => (
                        <span key={index} className="ratingStar">&#9733;</span>
                    ))}
                    </div>
                    <p>{review.comment}</p>
                </div>
            ))}

            <hr/>
            <pre>{JSON.stringify(data, null, 4)}</pre>

        </>
    )
}