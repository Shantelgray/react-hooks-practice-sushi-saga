import React, { useState } from "react";

function Sushi({ sushi, isEaten, onEat, moneyLeft }) {
  const canEat = sushi.price <= moneyLeft && !isEaten;

  function handleEaten() {
    if (canEat) {
      onEat(sushi);
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {isEaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}
export default Sushi;
