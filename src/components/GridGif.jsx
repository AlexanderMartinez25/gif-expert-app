import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GridGif = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
  };

  // efectos secundarios, si le pasamos [] como segundo argumento
  // solo se dispararé una única vez
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => (
          // <GridGif id={images.id} key={images.id} category={category} />
          <GifItem key={image.id} id={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
