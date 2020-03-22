import React, { useState } from 'react';
import "./App.css";

const TABLE_LENGTH = +getQueryParams("size") || 18;
const COLORS = [
  "orange",
  "green",
  "purple",
];



const getColorbyId = id => (id >= COLORS.length) ? "disabled" : COLORS[id];

function useColors() {
  const emptyArray = new Array(TABLE_LENGTH).fill(9);
  const [colors, setColors] = useState(emptyArray)

  const generateColors = () => {
    setColors(emptyArray);
    setTimeout(() =>
      setColors(emptyArray.map(() => Math.floor(Math.random() * COLORS.length))
      ), Math.random() * 3000
    )
  }

  return [colors, generateColors];
}

function TodoList() {
  const [colors, generateColors] = useColors();

  return (
    <div>
      <div className={"table"}>
        {colors.map((value, index) =>
          <div key={index} className={getColorbyId(value)} />
        )}
        <input type="button" value="Generar" onClick={generateColors} />
      </div>
    </div>
  )
}

function getQueryParams( params ) {
  let href = window.location.href;
  let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
  let queryString = reg.exec(href);
  return queryString ? queryString[1] : null;
};

export default TodoList;
