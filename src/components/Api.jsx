import React, {useState, useEffect} from 'react'

function Apiget() {
    const [apiData, setApiData] = useState();

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
      succes();
    },[])

    return(
      <h1>Hola</h1>
    )
}

export default Apiget;