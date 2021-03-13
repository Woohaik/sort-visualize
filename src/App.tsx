import React, { useState, useEffect } from 'react';
import Bar from "./components/Bar";
import { getRandomInt } from './utils/getRandomInt';


const App = () => {
  const CANVAS_SIZE = 800;
  const barWidth = 35;
  const MAX_BAR_QUANTITY = 20;
  const MIN_BAR_QUANTITY = 4;
  const barArrar = [
    {
      id: 0,
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 200,
    },
    {
      id: 1,
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 200,
    },
    {
      id: 2,
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 200,
    },
    {
      id: 3,
      color: "#0056ad",
      height: getRandomInt(20, 300),
      left: 0,
    },
  ];

  const [bars, setBars] = useState(barArrar);
  const calculatePos = () => {
    setBars(bars.map((barObject, index) => {
      barObject.id = index;
      barObject.left = (index * 45);
      return barObject;
    }))
  }





  useEffect(() => {
    calculatePos();
  }, []);

  const salt = () => setBars(barsObjects => barsObjects.map(barObject => ({ ...barObject, height: getRandomInt(20, 300) })))

  const addHandler = () => {
    if (bars.length < MAX_BAR_QUANTITY) {
      bars.push({
        id: bars.length,
        color: "#0056ad",
        height: getRandomInt(20, 300),
        left: 0
      });
      setBars([...bars])
      calculatePos();
    }
  }
  const dropHandler = () => {
    if (bars.length > MIN_BAR_QUANTITY) {
      bars.pop();
      setBars([...bars]);
      calculatePos();
    }
  }

  const widthOfContent = () => (bars.length * barWidth) + (bars.length - 1) * 10;


  const changePost = (id1: number, id2: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newArray = [...bars];
        const firstLeft = newArray.find(bar => bar.id === id1)?.left;
        const lastLeft = newArray.find(bar => bar.id === id2)?.left;
        const l1 = newArray.find(bar => bar.id === id1);
        const l2 = newArray.find(bar => bar.id === id2);
        if (l1 !== undefined) l1.left = lastLeft || -1;
        if (l2 !== undefined) l2.left = firstLeft || -1;

        setBars(newArray);
        resolve();
      }, 500)
    })
  }


  const setGreen = async (id: number, id2: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newBars = bars.map((barObject) => {
          barObject.color = "#0056ad";
          return barObject;
        })
        let BarToGreen = newBars.find(bar => bar.id === id);
        let BarToGreen2 = newBars.find(bar => bar.id === id2);

        if (BarToGreen !== undefined) BarToGreen.color = "#7da542";
        if (BarToGreen2 !== undefined) BarToGreen2.color = "#7da542";

        setBars(newBars);
        resolve();
      }, 500)
    });
  }

  const bubbleSort = async () => {
    let newArray = [...bars];
    let swapped = false;
    do {
      swapped = false;
      for (let i = 0; i < newArray.length; i++) {
        await setGreen(newArray[i].id, newArray[i + 1]?.id);    // Cambiar de color las que compara
        if (newArray[i].height > newArray[i + 1]?.height) {
          // A intercambiar
          await changePost(newArray[i].id, newArray[i + 1].id);
          let tmp = newArray[i];
          newArray[i] = newArray[i + 1];
          newArray[i + 1] = tmp;

          swapped = true;
        }

      }
    } while (swapped);
    console.log(newArray);
  };

  const startSort = () => {
    bubbleSort();

  }


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

              return <Bar class={index > 3 ? "ease-in" : ""} key={index} left={barObject.left} size={size} color={barObject.color} />
            })
          }
        </div>
      </div>
      <div className="button-container">
        <button className="changeValue" onClick={dropHandler}>Drop</button>
        <button className="changeValue" onClick={salt}>Salt</button>
        <button className="changeValue" onClick={addHandler}>Add</button>
      </div>
      <div className="button-container">
        <button className="changeValue" onClick={startSort}>Play</button>
      </div>
    </div>
  )
}

export default App
