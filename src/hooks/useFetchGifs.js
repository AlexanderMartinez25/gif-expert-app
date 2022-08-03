import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  // el hook es una funcion que regresa algo
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // hacemos la petición y llenamos el hook con la misma
  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // efectos secundarios, si le pasamos [] como segundo argumento
  // solo se dispararé una única vez
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
