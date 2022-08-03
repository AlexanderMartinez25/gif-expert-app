import { useEffect } from "react";
import { getGif } from "../helpers/getGifs";

export const GridGif = ({ category }) => {
  // efectos secundarios, si le pasamos [] como segundo argumento
  // solo se dispararé una única vez
  useEffect(() => {
    getGif(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
