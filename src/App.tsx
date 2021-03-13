import React, { useState } from 'react';

import Bar from "./components/Bar";
import { getRandomInt } from './utils/getRandomInt';



const App = () => {
  const CANVAS_SIZE = 800;
  const barWidth = 35;
  const MAX_BAR_QUANTITY = 20;
  const MIN_BAR_QUANTITY = 4;
  const barArrar = [{
    color: "#0056ad",
    height: getRandomInt(20, 300)
  },
  {
    color: "#0056ad",
    height: getRandomInt(20, 300)
  },
  {
    color: "#0056ad",
    height: getRandomInt(20, 300)
  },
  {
    color: "#0056ad",
    height: getRandomInt(20, 300)
  },
  ];

  const [bars, setBars] = useState(barArrar);
  const salt = () => setBars(barsObjects => barsObjects.map(barObject => ({ ...barObject, height: getRandomInt(20, 300) })))

  const addHandler = () => {
    if (bars.length < MAX_BAR_QUANTITY) {
      bars.push({
        color: "#0056ad",
        height: getRandomInt(20, 300)
      });
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
            bars.map((barObject, index) => {
              const size = {
                height: barObject.height,
                width: barWidth
              }
              const leftPosition: number = (index * 45);
              return <Bar class={index > 3 ? "ease-in" : ""} key={index} left={leftPosition} size={size} color="#0056ad" />
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
