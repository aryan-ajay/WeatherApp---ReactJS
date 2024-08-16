import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bihar",
        feels_like: 24.84,
        temp: 55.2,
        tempMin: 32.5,
        tempMax: 33.1,
        humidity: 66,
        weather: "misty"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
  return (
    <div>
      <SearchBox updateInfo ={updateInfo} />
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
