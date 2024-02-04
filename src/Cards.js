import React from "react";

const Cards = ({ country }) => {
  return (
    <div className="cartes">
    <img src={country.flag?.svg || country.flag?.png} alt={"drapeau " + country.name.common} />
    </div>
  );
};


export default Cards;
