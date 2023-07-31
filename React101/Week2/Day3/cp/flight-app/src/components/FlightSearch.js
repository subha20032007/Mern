import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults"
import './style.css'
const getData=(url)=>{
  return fetch(url)
  .then((res)=>res.json())
  .catch((err)=>console.log(err))
}
export const fetchData = async (url) => {

  // make fetch request to the mentioned api and return the result here
  try{
   const data=await getData(url)
  //console.log(data);
  return data
  
  }catch(err){
console.log(err)
  }
};


function FlightSearch() {
  const [source,setSource]=useState("")
  const [destination,setDestination]=useState("")
const [filterData,setFilterData]=useState([])
const [fData,setFdata]=useState([])
console.dir(fData)
  // on page load fetch the data (useEffect)
   const url= 'https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1'
  useEffect(()=>{
    fetchData(url).then((res)=>setFdata(res))
                  .catch((err)=>console.log(err+"$$$"))
  },[url])
  const handleSearch = () => {
    // filter the data based on source and destination
 //console.log(filterData)
   let a=fData.filter((el)=>{
     return el.source.toLowerCase()===source.toLowerCase()&&el.destination.toLowerCase()===destination.toLowerCase()
    }) 
    setFilterData(a)
    console.log(a+"*")
    console.log(fData+"**")
  }
  //seattle
  //florida
  return (
    <div className="flight-search-container">
      <div></div>
      <div>
        <section>
          <h4 className="flight-search-heading">Happy Flight Search</h4>
          <br />
          <input data-testid="source-input" value={source} onChange={(e)=>setSource(e.target.value)} placeholder="Source" />
          <br /> <br />
          <input data-testid="destination-input"  value={destination}  onChange={(e)=>setDestination(e.target.value)} placeholder="Destination" />
          <br /> <br />
          <button   className="flight-search-button" onClick={handleSearch} data-testid="search-button">Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      {filterData.length>0? <SearchResults key={Math.random()+Date.now()} props={filterData} />:  <div  data-testid="no-flights" className="no-flights-found">
            No Flights Found
          </div>}
     
    
    </div>
  );
}

export default FlightSearch;
