import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = (val = 1) => {
    setCount((prev) => prev + val);
  };
  const decrement = (val = 1) => {
    setCount((prev) => prev - val);
  };
  return (
    <div>
      <label>Counter: {`${count}`}</label>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
    </div>
  );
};

export default Counter;
