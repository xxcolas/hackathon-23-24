import React from "react";
import { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('http://localhost:3000/')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setIsLoading(false)
        })
    }, [])
  
    return (
      <>
       <h1> hello world </h1>
        </>
    )
}

export default Home;