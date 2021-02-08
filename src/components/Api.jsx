import React, {useState, useEffect} from 'react'

function Apiget() {
    const [apiData, setApiData] = useState([]);
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

/*     let celsius = (apiData.main.temp) - 273.15;
    console.log(celsius); */

    return(
      <div className="container">
        <div className="location">
          <p className="date-info">Monday, 8th April</p>
          <p className="city">{apiData.name}, {/* {apiData.sys} */}</p>
          <p className="date-info">{/* {apiData.weather.[0].description} */}</p>
        </div>
        <div className="weather">
          <div className="icon-weather">
            <img src="/images/11d.svg"/>
          </div>
          <div className="tem-btn">
            <p>10°C</p>
            <div><button>°F</button></div>
          </div>
        </div>
        <div className="description">
          <p>Wind Speed: {/* {apiData.wind.speed} */}m/s</p>
          <p>Clouds: {/* {apiData.clouds.all} */}%</p>
          <p>Presure: {/* {apiData.main.pressure} */}mb</p>
        </div>
      </div>
    )
}

export default Apiget;