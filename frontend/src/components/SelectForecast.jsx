import React, { useState } from 'react'


function SelectForecast() {
     const [skiResort, setSkiResort] = useState()
     const [resortForecast, setResortForecast] = useState()

     //TODO - fetch from webcam API

    // useEffect(()=>{
    //   let getWebcamFromServer = async () => {
    //     try {
    //       if (skiResort === 'Lake Louise') {
    //         let response = await fetch(`/webcam?webcamId=1294185930`);
    //         let vals = await response.json()
    //         console.log(vals);
    //       } else if (skiResort === 'Sunshine Village') {
    //         let response = await fetch(`/webcam?webcamId=1462284664`);
    //         let vals = await response.json()
    //         console.log(vals);
    //       }
    //     } catch (err) {
    //       console.error(err)
    //     }
    //   }
    // })

  const resortWebsite = skiResort === 'Lake%20Louise' ?  'https://www.skilouise.com/'
   : skiResort === 'Sunshine%20Village' ? 'https://www.skibanff.com/'
   : <em>no ski resort selected</em>

  return (
    <>
    <div id="selectResort">
          <h4 htmlFor='resort'>Select your preffered ski resort:</h4>
          <br />
          <select id='resort' name='resort' onChange={async (event)=>{
                setSkiResort(event.target.value)
                try {
                  let response = await fetch(`/forecast?resort=${event.target.value}`);
                  let vals = await response.json();
                  return setResortForecast(vals.summary3Day);
        } catch (error) {
                  console.log(error);
                }
          }}>
            <option disabled selected defaultValue>
              Select resort
            </option>
            <option value='Lake%20Louise'>Lake Louise</option>
            <option value='Sunshine%20Village'>Sunshine Village</option>
          </select>
          </div>
          <br />
          <h3>3 Day forecast summary:</h3>
          <p>{resortForecast}</p>
          <h4>Resort website:</h4>
          <p>{resortWebsite}</p>
        </>
  )
  }

export default SelectForecast