'use client'

import {useEffect, useState} from "react";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [timer, setTimer] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const search = async (searchTerm) => {
        const response = await fetch('/api/search?s=' + searchTerm);
        const data = await response.json();
        setSearchResults(data.products);
    }

    useEffect(() => {

        if(timer) {
            clearTimeout(timer);
        }

        const newTimer = setTimeout(() => {
            search(searchTerm);
        }, 300);

        setTimer(newTimer);

        return () => clearTimeout(newTimer);

    }, [searchTerm]);

    return <>
        <form>
            <label>Search:</label>
            <input
                type="text"
                onChange={e => setSearchTerm(e.currentTarget.value)}
            />
        </form>

        <div>
            {searchResults &&
                searchResults.map((product) => (<p key={product.id}>{product.title}</p>))
            }
        </div>
    </>
};

export default SearchBar;

