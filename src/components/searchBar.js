'use client'

const SearchBar = () => {

    const search = (searchTerm) => {
        console.log(searchTerm);
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

