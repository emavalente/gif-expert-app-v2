import { useEffect, useState } from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifCard from "./GifCard";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      <div className="gifGrid">
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          <>
            {images.map((gif) => (
              <GifCard key={gif.id} {...gif} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default GifGrid;
