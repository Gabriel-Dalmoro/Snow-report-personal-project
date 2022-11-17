import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5005;
const app = express();

app.use(express.json());

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
  },
};

console.log(options.headers);

const getForecast = async (skiResort) => {
  const urlSafe = encodeURIComponent(skiResort);
  const url = `https://ski-resort-forecast.p.rapidapi.com/${urlSafe}/forecast?units=m&el=top`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

app.get('/forecast', async (req, res) => {
  const skiResort = req.query.resort;
  const forecastData = await getForecast(skiResort);
  res.send(forecastData);
});

// app.get('/webcam', async (req, res) => {
//   const skiWebcam =
// })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
