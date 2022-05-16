

const SearchForm = () => {

     const handleEvent = (e) => {
        console.log(e.keyCode)
     }
    return(
        <>
            <form className="form-inline my-2 my-lg-0 col-md-2 d-flex justify-content-between">
                <input onKeyDown={handleEvent} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </>
    );
}

export default SearchForm;