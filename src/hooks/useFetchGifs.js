import { useEffect, useState } from "react";
import { getGifs } from "../helpers";
const useFetchGifs = (category) => {
  const [gifs, setgifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newGifs = await getGifs(category);
    setTimeout(() => {
      setgifs(newGifs);
      setIsLoading(false);
    }, 2000);
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    images: gifs,
    isLoading,
  };
};

export default useFetchGifs;
