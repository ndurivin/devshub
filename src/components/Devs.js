import React, { useEffect, useState }from 'react'
import DevCard from './DevCard'; 


const devsUrl = 'https://quiet-hamlet-90428.herokuapp.com/devs';

function Devs() {

    const [devs, setDevs] = useState([]);

    const getDev = () => {
        fetch(devsUrl)
            .then((res) => res.json())
            .then((devs) => { 
                setDevs (devs) 
        })
    }

    useEffect(
        getDev, []
    )

  let devCards = devs.map((dev) => (<DevCard devName="" devId="" devPic=""/>))

  return (
    <div className='container'>
        {devCards}
    </div>
   
  )
}

export default Devs;
