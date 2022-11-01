import fetch from 'node-fetch';

//ONLY 10 calls PER DAY!

// const url =
//   'https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort/whistler-blackcomb';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '0a85a08416msh6a3d114f3ace883p1bf07djsnd8c925397308',
//     'X-RapidAPI-Host': 'ski-resorts-and-conditions.p.rapidapi.com',
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error('error:' + err));

const url =
  'https://ski-resort-forecast.p.rapidapi.com/Lake%20Louise/hourly?units=i&el=top&c=false';

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
