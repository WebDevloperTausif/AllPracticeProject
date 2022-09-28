import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
const UsersPhoto = () => {
  const [data, setdata] = useState([]);
  const [istrue, setistrue] = useState(false);
  const getdata = async () => {
    setistrue(true);
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    res = await res.json();
    setdata(res);
    setistrue(false);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <Navbar />
      {istrue ? (
        <p>loading...</p>
      ) : (
        <div>
          <div>
            <p>photo</p>
            {data.map((item, i) => {
              return (
                <div key={i}>
                  <Link to={`/users/${item.id}`}>
                    <img src={item.url} alt={item.url} />
                    <p>{item.title}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPhoto;
