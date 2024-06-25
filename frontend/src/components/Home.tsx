import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1 className="text-3xl font-bold underline">Loading...</h1>
      ) : (
        <h1 className="text-3xl font-bold underline">{data.message}</h1>
      )}
    </>
  );
};

export default Home;
