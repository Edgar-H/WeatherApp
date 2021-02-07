import React, {useState, useEffect} from 'react'

export default function WatchLocation(){
  const [apiData, setApiData] = useState();

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(succes, error);
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

  if (navigator.geolocation) {
    <h1>Hola</h1>
  } else {
    error();
  }

  function error() {
  return (
    <div class="error">
      <div>
        <h2>Ups :c</h2>
        <p>Algo salio mal, no podimos acceder a tu ubicación</p>
      </div>
    </div>
  )
}
  return (
    <div className="my-location" id="My-location">
    </div>    
  )
}
