import { useState } from "react";

export default function TotalPrice() {
  const [prices, setPrices] = useState([100, 200, 300]);


  const addPrice = () => {
    setPrices(prev => [...prev, 100]);
  };

//change price
  const increasePrice = (id: number) => {
    setPrices(prev =>
      prev.map((price, i) =>
        i === id ? price + 50 : price
      )
    );
  };

  let totalPrice = 0;
    for (const price of prices) {
        totalPrice += price;
    }

return (
  <div>
    <h2>Total: ${totalPrice}</h2>
    <ul>
      {prices.map((price, index) => (
        <li key={index}>
          ${price}
          <button onClick={() => increasePrice(index)}>+50</button>
        </li>
      ))}
    </ul>

    <button onClick={addPrice}>Add Item</button>
  </div>
);