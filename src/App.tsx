import React, { useState } from 'react'

import Bar from "./components/Bar"


function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {

  const arrayBar = [150]

  const [barNumber, setBarNumbers] = useState(0);
  const [bars, setBars] = useState(arrayBar);

  const salt = () => {

    setBars(bars.map(() => getRandomInt(20, 300)))
  }


  const changeHandler = (event: any) => {
    setBarNumbers(event.target.value);
    bars.push(getRandomInt(20, 300))
    setBars(bars)
  }

  return (
    <div className="app">
      <div className="wrapper ">
        {

          bars.map((bar, index) => {
            const size = {
              height: bar,
              width: 40
            }
            return <Bar key={index} left={(index + 1) * 95} size={size} color="red" />
          })

        }
      </div>
      <input type="number" min="0" max="15" onChange={changeHandler} value={barNumber} />
      <button onClick={salt}>Salt</button>
    </div>
  )
}

export default App
