import React from "react";

function Search() {
    return (
        <form className="d-flex px-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-dark" type="submit">Search</button>
        </form>
    )
}

export default Search