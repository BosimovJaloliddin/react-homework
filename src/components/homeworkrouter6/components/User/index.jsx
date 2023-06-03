import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, [params.id]);
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
      <h1>{user.phone}</h1>
    </div>
  );
};

export default User;
