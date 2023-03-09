import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [count]
    // than clearInterval will run every time
    // this value changes (useEffect re-run)
  }, []);

  return <div>Timer: {`${count}`}</div>;
};

export default Timer;
