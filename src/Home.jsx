import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const Home = () => {  
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3/all").then((response) => {
      setCountries(response.data);
    });
  });
  
  return (
    
    <div className="home">
      <h1>Home</h1>
      <ul>
        {countries.map((country, index) => (
          <Cards key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
