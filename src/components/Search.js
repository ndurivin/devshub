import React, { useState, useEffect }from 'react'
import DevCard from './DevCard';

const devsUrl = "https://quiet-hamlet-90428.herokuapp.com/devs";

function Search() {

  // const [search, setSearch] = useState("")

  
  return (
    <div className='container'>
      <form className="d-flex" role="search">
         <input className="form-control" type="search" placeholder="Search by technology stack..." aria-label="Search"
          // onChange={(e) => setSearch(e.target.value)}
         />
         <button className="btn btn-outline-alert" type="submit">Search </button>
      </form>
      <div className='py-4 container'>
      <div className="row cols-3 justify-content-center">
        <div className="col-11 col md-6 col-lg-3 mx-0 mb-4">
        {/* <div className="card h-100 shadow"> */}
            {/* {detailCards} */}
        {/* </div> */}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Search;
