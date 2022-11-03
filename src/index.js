// import dotenv from '../node_modules/dotenv';
// dotenv.config();

let resortMenu = document.querySelector('#resort');
resortMenu.addEventListener('change', (event) => {
  getWeather(event.target.value);
});

async function getWeather(resortName) {
  console.log(`fetching ${resortName}`);
  const url = `https://ski-resort-forecast.p.rapidapi.com/${resortName}/forecast?units=m&el=top`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0a85a08416msh6a3d114f3ace883p1bf07djsnd8c925397308',
      //   'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
    },
  };
  let outputData = await fetch(url, options)
    .then((res) => res.json())
    .then((forecastData) => {
      return forecastData;
    })
    .catch((err) => console.error('error:' + err));

  document.querySelector('#summary').innerHTML = outputData.summary3Day;
}
