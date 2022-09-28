import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Airline.css";
import { useState } from "react";
import Navbar from "../Navbar";

const Airline = () => {
  const [istrue, setistrue] = useState(false);
  const [airlinedata, setairlinedata] = useState([]);
  const [filterairlinedata, setfilterairlinedata] = useState([]);
  const getdata = async () => {
    setistrue(true);
    let res = await fetch("https://api.instantwebtools.net/v1/airlines");
    res = await res.json();
    setairlinedata(res);
    setfilterairlinedata(res);
    setistrue(false);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <div>
        {istrue ? (
          <p>loading...</p>
        ) : (
          <div className="airlineParent">
            {airlinedata.map((item, i) => {
              return (
                <div className="airlineChild" key={i}>
                  <img src={item.logo} alt={item.logo} />
                  <Link to={`/airline/${item.id}`}>
                    <p>{item.country}</p>
                    <p>{item.established}</p>
                    <p>{item.head_quaters}</p>
                    <p>{item.name}</p>
                    <p>{item.slogan}</p>
                    <p>{item.website}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Airline;
