import React, { useState, useEffect }from 'react'
import DevCard from './DevCard';

const api_Url = "https://quiet-hamlet-90428.herokuapp.com/devs";

function Search() {

  const seachDevs = async (name) => {
    const res = await fetch(`${api_Url}&s=${name}`)
    const data = await res.json();
  }
useEffect(() => {
  seachDevs()

},[]);
  

  
  return (
    <div className='container'>
      

    </div>
  )
}

export default Search;


