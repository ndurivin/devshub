import React, { useState }from 'react'

const devsUrl = "https://quiet-hamlet-90428.herokuapp.com/devs";

function Search() {



  // const[filter, setFilter] = useState("");
  // const searchText = (event) => {
  //   setFilter(event.target.value);
  // }

  // fetch(devsUrl)
  // .then((res) => res.json())
  // .then((data) => {
  //   setFilter(data.filter().map(filter))
  //   return Object.keys(filter)
  // })

  
  return (
    <div className='container'>
      <form className="d-flex" role="search">
         <input className="form-control" type="search" placeholder="Search by technology stack..." aria-label="Search"
        //  value={filter}
        //  onChange={searchText.bind(this)}
         />
         <button className="btn btn-outline-alert" type="submit">Search </button>
      </form>

    </div>
  )
}

export default Search;
