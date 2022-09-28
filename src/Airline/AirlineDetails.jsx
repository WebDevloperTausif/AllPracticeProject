import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const AirlineDetails = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [istrue, setistrue] = useState(false);
  const getdata = async (id) => {
    setistrue(true);
    const url = `https://api.instantwebtools.net/v1/airlines/${id}`;
    let res = await fetch(url);
    res = await res.json();
    setdata(res);
    setistrue(false);
  };
  const { logo, country, established, head_quaters, name, slogan, website } =
    data;
  useEffect(() => {
    getdata(id);
  }, [id]);
  return (
    <div>
      {istrue ? (
        <p>loading...</p>
      ) : (
        <div>
          <p>Product Details</p>
          <img src={logo} alt={logo} />
          <p>{country}</p>
          <p>{established}</p>
          <p>{head_quaters}</p>
          <p>{name}</p>
          <p>{slogan}</p>
          <p>{website}</p>
        </div>
      )}
    </div>
  );
};

export default AirlineDetails;
