import { useRef, useState } from "react";

export default function ClickDemo() {
  const [count, setCount] = useState(0);

  const clickRef = useRef(0);
  const handleClick = () => {
    setCount(count + 1);
    clickRef.current += 1;
  };

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={handleClick}>
        Add
      </button>

      <button
        onClick={() => {
          alert(clickRef.current);
        }}
      >
        Show Real Count
      </button>
    </div>
  );
}