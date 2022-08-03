import { getGif } from "../helpers/getGifs";

export const GridGif = ({ category }) => {
  getGif(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
