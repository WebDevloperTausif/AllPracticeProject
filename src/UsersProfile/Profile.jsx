import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [istrue, setistrue] = useState(false);
  const { id } = useParams();
  const getdata = async () => {
    setistrue(true);
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    res = await res.json();
    setistrue(false);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      {istrue ? (
        <p>loading...</p>
      ) : (
        <div>
          <p>data</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
