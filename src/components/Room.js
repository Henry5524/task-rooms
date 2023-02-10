import React, { useState } from "react";
import simple from "../coordinates/simple";
import triangle from "../coordinates/triangle";
import t_shape from "../coordinates/t_shape";
import DrawRoom from "./DrawRoom";

const Room = () => {
  const [randomFig, setRandomFig] = useState(simple);
  let AxisX = [];
  let AxisY = [];

  randomFig.corners.forEach((key, index, array) => {
    const newX = array[index].x / 2;
    const newY = array[index].y / 2;
    AxisX.push(newX);
    AxisY.push(newY);
  });

  const changeRoom = () => {
    const num = Math.floor(Math.random() * AxisX.length);
    let newAxisX = moveArrayElement(AxisX, num);
    let newAxisY = moveArrayElement(AxisY, num);

    setRandomFig({
      ...randomFig,
      corners: randomFig.corners.map((corner, index) => {
        return {
          x: newAxisX[index] * 2,
          y: newAxisY[index] * 2,
        };
      }),
    });
  };

  function moveArrayElement(array, fromIndex) {
    let element = array.splice(fromIndex, 1)[0];
    let toIndex = Math.floor(Math.random() * array.length);
    array.splice(toIndex, 0, element);
    return array;
  }

  return (
    <div>
      <h1 className="text-center py-5 text-2xl font-bold text-gray-700">
        Please click one of the buttons
      </h1>
      <div className="flex justify-evenly">
        <button
          className="border-none text-gray-100 rounded-lg p-2 bg-slate-500"
          onClick={() => setRandomFig(simple)}
        >
          Simple Room
        </button>
        <button
          className="border-none text-gray-100 rounded-lg p-2 bg-slate-500"
          onClick={() => setRandomFig(triangle)}
        >
          Triangle Room
        </button>
        <button
          className="border-none text-gray-100 rounded-lg p-2 bg-slate-500"
          onClick={() => setRandomFig(t_shape)}
        >
          T_Shape Room
        </button>

        <button
          className="border-none text-gray-100 rounded-lg p-2 bg-cyan-600"
          onClick={() => changeRoom()}
        >
          Change Room
        </button>
      </div>

      <DrawRoom axisX={AxisX} axisY={AxisY} />
    </div>
  );
};

export default Room;
