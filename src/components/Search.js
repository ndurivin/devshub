import React from 'react'

function Search() {

  
  return (
    <div className='container'>
      <form className="d-flex" role="search">
    <input className="form-control me-" type="search" placeholder="Search by technology stack" aria-label="Search"/>
    <button className="btn btn-outline-primary" type="submit">Search </button>
</form>
    </div>
  )
}

export default Search;
