import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 4001;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}. `);
});

const url =
  'https://ski-resort-forecast.p.rapidapi.com/Lake%20Louise/forecast?units=m&el=top';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0a85a08416msh6a3d114f3ace883p1bf07djsnd8c925397308',
    'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error('error:' + err));
