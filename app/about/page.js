import Image from "next/image";

export default async function About() {

    const response = await fetch("https://dummyjson.com/posts?limit=1");
    const data = await response.json();
    const post = data['posts'][0];

    return (
        <>
            <h1>About Page</h1>
            <Image
                src="/images/16.jpg"
                alt="Ferrari Image"
                width="256"
                height="192"
            />

            <h4>{post.title}.</h4>
            <p>{post.body}</p>
        </>
    )
}