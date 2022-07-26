import React, { useEffect, useState } from "react";
import DevCard from "./DevCard";
import Search from "./Search";

const devsUrl = "https://quiet-hamlet-90428.herokuapp.com/devs";

function Devs() {
  const [devs, setDevs] = useState([]);

  const getDev = () => {
    fetch(devsUrl)
      .then((res) => res.json())
      .then((devs) => {
        setDevs(devs);
      });
  };

  useEffect(getDev, []);

  let devCards = devs.map((dev) => (
    <DevCard
      devName={dev.name}
      key={dev.id}
      devId={dev.id}
      devPic={dev.image}
    />
  ));

  return (
    <div className="container">
        {/* <Search /> */}
        <br/>
        <h1 className="text-center">View All Developers</h1>
       <center>
      <div className="col">
          {devCards}
        </div>
       </center>
        {/* </div> */}
    </div>
  );
}

export default Devs;
