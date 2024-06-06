
// https://dummyjson.com/products/add
'use client'
import {useState} from "react";

export default function Register () {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const createProduct = () => {
        fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                price: price,
                description: description
            })
        })
    }


    return <>
        <form>
            <input type="text" placeholder="Product Title" onChange={e => setTitle(e.target.value)} />
            <input type="number" placeholder="Product Price" onChange={e => setPrice(e.target.value)} />
            <input type="text" placeholder="Product Description" onChange={e => setDescription(e.target.value)} />
            <button onClick={createProduct} type='button'>Save</button>
        </form>
    </>
}