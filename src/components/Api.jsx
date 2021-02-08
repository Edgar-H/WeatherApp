import React, {useState, useEffect} from 'react'

function Apiget() {
    const [apiData, setApiData] = useState([]);
    const {clouds, main, sys, weather, wind} = apiData; // <-Desestructuración 
    useEffect(() =>{
      navigator.geolocation.getCurrentPosition(succes);
      async function succes(coordsPosition){
        let coord = coordsPosition.coords;
        const apiKey = '4cc25c0ed0bbfaad5d54d4f945b88f1f';
        const Api = `http://api.openweathermap.org/data/2.5/weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${apiKey}`;
        try {
          let getApi = await fetch(Api) 
          let data = await getApi.json() 
          setApiData(data)
          console.log(data);   
        } catch (error) { 
        }
      };
    },[])

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
let imgcondition = new URL(`/images/${weather.icon}.svg`)
    return(
      <div className="container">
        <div className="location">
          <p className="date-info">{new Date().toLocaleDateString('en-US', options)}</p>
          <p className="city">{apiData.name}, {}</p>
          <p className="date-info">{/* {weather.description} */}</p>
        </div>
        <div className="weather">
          <div className="icon-weather">
            <img src="/images/11d.svg"/>
            {/* <img src={imgcondition}/> */}
          </div>
          <div className="tem-btn">
            <p>{/* {main.temp} */}°C</p>
            <div><button>°F</button></div>
          </div>
        </div>
        <div className="description">
          <p>Wind Speed: {/* {wind.speed} */}m/s</p>
          <p>Clouds: {/* {clouds.all} */}%</p>
          <p>Presure: {/* {main.pressure} */}mb</p>
        </div>
      </div>
    )
}

export default Apiget;