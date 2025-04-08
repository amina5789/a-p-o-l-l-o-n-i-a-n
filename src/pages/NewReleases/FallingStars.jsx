import React, { useEffect, useState } from "react";
import styl from "./NewReleases.module.scss";

const FallingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100 + "vw",
      animationDuration: Math.random() * 3 + 2 + "s", 
    }));
    setStars(newStars);
  }, []);

  return (
    <div className={styl.starContainer}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styl.star}
          style={{
            left: star.left,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default FallingStars;
