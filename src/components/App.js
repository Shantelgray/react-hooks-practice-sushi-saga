import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [eatenIds, setEatenIds] = useState([]);
  const startMoney = 80;

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((res) => res.json())
      .then(setSushis);
  }, []);

  const moneySpent = eatenIds.reduce((total, id) => {
    const sushiEaten = sushis.find((sushi) => sushi.id === id);
    return sushiEaten ? total + sushiEaten.price : total;
  }, 0);

  const moneyLeft = startMoney - moneySpent;

  function handleEaten(sushi) {
    if (eatenIds.includes(sushi.id)) return;
    if (sushi.price <= moneyLeft) {
      setEatenIds([...eatenIds, sushi.id]);
    } else {
      alert("Brokie");
    }
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        eatenIds={eatenIds}
        handleEaten={handleEaten}
        setSushis={setSushis}
        moneyLeft={moneyLeft}
      />
      <Table plates={eatenIds} remainingBudget={moneyLeft} />
    </div>
  );
}

export default App;
