import { useState } from "react";

export const AddCity = ({ handelAdd }) => {
  const [citydata, setCityData] = useState({
    name: "",
    population: "",
    country: ""
  });
  const handelChange = (e) => {
    const { name, value, type } = e.target;
    let val = type === "number" ? +value : value;
    val = type === "number" && value === 0 ? "" : value;
    setCityData({ ...citydata, [name]: val });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    handelAdd(citydata);
  };
  const { name, population, country } = citydata;
  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          placeholder="ADD CITY NAME"
          name="name"
          onChange={handelChange}
          value={name}
          type="text"
        />
        <br />
        <br />
        <input
          placeholder="ADD POPULATION"
          name="population"
          onChange={handelChange}
          value={population}
          type="number"
        />
        <br />
        <br />
        <input
          placeholder="ADD COUNTRY"
          name="country"
          onChange={handelChange}
          value={country}
          type="text"
        />
        <br />
        <br />
        <button>Add City</button>
      </form>
    </>
  );
};
