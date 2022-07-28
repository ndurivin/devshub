import React, { useState, useEffect }from 'react'
import DevCard from './DevCard';

const api_Url = "https://quiet-hamlet-90428.herokuapp.com/devs";


const dev1 = {
  "name": "Pjhyett",
    "id": 3,
    "image": "https://i.pinimg.com/236x/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3--jedi-knight-open-source.jpg",
    "language_id": "Java",
    "experience": 7,
    "followers": 43,
    "following": 48
}

function Search() {

  const seachDevs = async (name) => {
    const res = await fetch(`${api_Url}`)
    const data = await res.json();

    console.log(data.Search);

  }
useEffect(() => {
  seachDevs()

},[]);
  

  
  return (
    <div className='container'>
       <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search for devs by tech stack" aria-label="Search" 
        onChange={() => {}}
        />
        <button onClick={() => {}} class="btn btn-outline-primary" type="submit">Search
        </button>
      </form> <br/>
      <h2 className="text-center">Filtered Developers</h2>


      
    </div>
  )
}

export default Search;


