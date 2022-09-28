import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [istrue, setistrue] = useState(false);
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const getdata = async () => {
    setistrue(true);
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    res = await res.json();
    let item = res.find((el) => {
      return el.id == id;
    });
    setdata([...data, item]);
    setistrue(false);
  };
  useEffect(() => {
    getdata();
  }, );
  return (
    <div>
      <div>
        <h1>User</h1>
      </div>
      <div>
        {istrue ? (
          <p>loading...</p>
        ) : (
          <div>
            {data.map((item, i) => {
              return (
                <div key={i}>
                  <img src={item.url} alt={item.url} />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
