import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushis,
  setSushis,
  handleEaten,
  eatenIds,
  moneyLeft,
}) {
  const [currentSushi, setCurrentSushi] = useState(0);
  const sliceSize = 4;

  function handleClick() {
    setCurrentSushi((currentSushi) => currentSushi + sliceSize);
  }

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((res) => res.json())
      .then((data) => setSushis(data));
  }, []);

  return (
    <div className="belt">
      {sushis.slice(currentSushi, sliceSize + currentSushi).map((sushi) => (
        <Sushi
          sushi={sushi}
          key={sushi.id}
          setSushis={setSushis}
          isEaten={eatenIds.includes(sushi.id)}
          onEat={handleEaten}
          moneyLeft={moneyLeft}
        />
      ))}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
