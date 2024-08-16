import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../CSS/Info.css";


export default function InfoBox({info}) {
  let INI_URL = "https://plus.unsplash.com/premium_photo-1715972898845-62dd6786fb58?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL = "https://plus.unsplash.com/premium_photo-1675271988124-55694ef43fd4?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL = "https://plus.unsplash.com/premium_photo-1681149343058-240f47d51097?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL = "https://plus.unsplash.com/premium_photo-1661715276689-619fb1c79d6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className='info-box'>
      <h1>WeatherInfo - {info.weather}</h1>

      <div className="card-container">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Tempreature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <b><i>{info.weather}</i></b> feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
      </div>
    </div>
  )
}
