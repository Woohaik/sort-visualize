import React, { useState } from 'react'

import Bar from "./components/Bar"



function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const CANVAS_SIZE = 800;
  const barWidth = 40;
  const MAX_BAR_QUANTITY = 15;
  const MIN_BAR_QUANTITY = 2;
  const arrayBar: number[] = [getRandomInt(20, 300), getRandomInt(20, 300)]
  const [bars, setBars] = useState<number[]>(arrayBar);

  const salt = () => {
    setBars(bars.map(() => getRandomInt(20, 300)))
  }


  const addHandler = () => {
    if (bars.length < MAX_BAR_QUANTITY) {
      bars.push(getRandomInt(20, 300));
      setBars([...bars])
    }
  }
  const dropHandler = () => {
    if (bars.length > MIN_BAR_QUANTITY) {
      bars.pop();
      setBars([...bars])
    }
  }

  const widthOfContent = () => (bars.length * barWidth) + (bars.length - 1) * 10;

  return (
    <div className="app">
      <div className="wrapper ">
        <div className="order-content" style={{ left: (CANVAS_SIZE - widthOfContent()) / 2, width: widthOfContent() }}>
          {
            bars.map((bar, index) => {
              const size = {
                height: bar,
                width: barWidth
              }
              const leftPosition: number = (index * 50);
              return <Bar key={index} left={leftPosition} size={size} color="#0056ad" />
            })
          }
        </div>
      </div>
      <div className="button-container">
        <button className="changeValue" onClick={dropHandler}>Drop</button>
        <button className="changeValue" onClick={salt}>Salt</button>

        <button className="changeValue" onClick={addHandler}>Add</button>
      </div>




    </div>
  )
}

export default App
