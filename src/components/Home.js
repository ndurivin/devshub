import React from 'react'
// import { Link } from 'react-router-dom';

function Home() {
  return (
      
      <div className='container'>
        <h1 className="text-center" style={{color:"blue"}}>Welcome to DevsHub</h1> 
        <h3 className="text-center" style={{fontStyle:"italic", borderRadius: "12px"}}>Home of the best software developers</h3> <br/>
        <img src="https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg" className="card-img-top img-fluid" alt=""/>
          {/* <form className="d-flex" role="search">
              <Link to="/search" className="nav-link justify-content-center">Search for Developers</Link>
         </form> */}

    </div>
  )
}

export default Home;
