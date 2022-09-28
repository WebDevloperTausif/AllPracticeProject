import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Profiles = () => {
  const [istrue, setistrue] = useState(false);
  const [data, setdata] = useState([]);
  const getdata = async () => {
    setistrue(true);
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    res = await res.json();
    setdata(res);
    setistrue(false);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <h1>Profiles</h1>
      </div>
      <div>
        {istrue ? (
          <p>loading...</p>
        ) : (
          <div>
            <div>
              {data.map((item, i) => {
                return (
                  <div key={i}>
                    <Link to={`/profile/${item.id}`}>
                      <p>{item.name}</p>
                    </Link>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profiles;
