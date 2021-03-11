import React, { useState } from 'react'

import Bar from "./components/Bar"

const CANVAS_SIZE = 800;
const barWidth = 40;

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



const App = () => {

  const arrayBar: number[] = []
  const [barNumber, setBarNumbers] = useState(arrayBar.length);

  const [bars, setBars] = useState(arrayBar);

  const salt = () => {
    setBars(bars.map(() => getRandomInt(20, 300)))
  }


  const addHandler = () => {
    if (barNumber < 15) {
      setBarNumbers(barNumber + 1)
      bars.push(getRandomInt(20, 300));
      setBars(bars)
    }
  }
  const dropHandler = () => {
    if (barNumber > 1) {
      setBarNumbers(barNumber - 1)
      bars.pop();
      setBars(bars)
    }
  }

  const widthOfContent = (barNumber * barWidth) + (barNumber - 1) * 10

  return (
    <div className="app">
      <div className="wrapper ">
        <div className="order-content" style={{ left: (CANVAS_SIZE - widthOfContent) / 2, width: widthOfContent }}>
          {
            bars.map((bar, index) => {
              const size = {
                height: bar,
                width: barWidth
              }
              const leftPosition: number = (index * 50);
              return <Bar key={index} left={leftPosition} size={size} color="red" />
            })
          }
        </div>
      </div>
      <div>{barNumber}</div>

      <div onClick={addHandler}>Add</div>

      <div onClick={dropHandler}>Drop</div>

      <button onClick={salt}>Salt</button>

    </div>
  )
}

export default App
