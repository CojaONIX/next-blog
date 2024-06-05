'use client'

const SearchBar = () => {

    const search = async (searchTerm) => {
        const response = await fetch('/api/search?s=' + searchTerm);
        console.log(await response.json());
        //return response.json();
    }

    return <>
        <form>
            <label>Search:</label>
            <input
                type="text"
                onChange={e => search(e.currentTarget.value)}
            />
        </form>
    </>
};

export default SearchBar;

