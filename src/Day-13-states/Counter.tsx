import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const getMessage = () => {
    if (count < 0) {
      return "Negative number!";
    }

    if (count === 0) {
      return "Starting point";
    }

    if (count > 0 && count <= 5) {
      return "Keep click!";
    }

    if (count > 5 && count <= 10) {
      return "High count!";
    }

    return "Count is very high!";
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <h3>{getMessage()}</h3>

      <button onClick={handleAdd}>
        Add
      </button>

      <button
        onClick={handleMinus}
        style={{ marginLeft: "10px" }}
      >
        Minus
      </button>
    </div>
  );
}