import  { useEffect, useState } from 'react';
import './Temp.css'; 

function Temp() {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("Delhi");
    
    useEffect(() => {
      const fetchApi = async() => {
    const url =
    `http://api.openweathermap.org/data/2.5/weather?q=${search}
    &appid=6d66317d8351d128cd508c0832c119e5`;
    const response = await fetch(url);
  // console.log(response);
    const resJson = await response.json();
   // console.log(resJson);
  // console.log(search);
    setCity(resJson.main);
    }; 
    fetchApi();
    }, [search])

return ( <>
<div className ="box" >
    
   <div className = "inputData" >
    <input type = "search" name='search' value={search} 
      className = "inputField"
        onChange = {(e) =>{
             setSearch(e.target.value) 
             }}/>   
    </div>

{!city ? ( <p className = "errorMess" >
    Please Enter Your City Name </p> ): 
    ( <>
    <div className = 'info'>
        <h2 className = "location" >
        <i className="fa fa-map-marker"></i>{search}</h2>  
        <h3>Temp:{city.temp}K</h3> 
        <h3>Min:{city.temp_min}K | Max:{city.temp_max}K</h3> 
        <h3>Humidity:{city.humidity}% </h3>
    </div> 
    </>
    )} 
</div>    
</>)
    }
export default Temp;