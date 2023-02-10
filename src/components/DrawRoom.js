import React from "react";
import { Stage, Layer, Shape } from "react-konva";

function DrawRoom({ axisX, axisY }) {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer
        offsetX={-window.innerWidth / 1.1}
        offsetY={-window.innerHeight / 4}
      >
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            for (let i = 0; i < (axisX && axisY).length; i++) {
              context.lineTo(axisX[i], axisY[i]);
            }
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="gray"
          stroke="black"
          strokeWidth={5}
        />
      </Layer>
    </Stage>
  );
}

export default DrawRoom;
