import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const GridGif = ({ category }) => {
  const [counter, setCounter] = useState(10);
  // efectos secundarios, si le pasamos [] como segundo argumento
  // solo se dispararé una única vez
  useEffect(() => {
    getGif(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
