import React, { useMemo, useState } from "react";

const SortedArrayComponent = ({ items = [8, 3, 4, 1, 2], sortFunc }) => {
  const [by, setBy] = useState("id");

  const sortedArr = useMemo(() => {
    return [...items].sort((a, b) => sortFunc(a, b, by));
  }, [by, items, sortFunc]);

  return (
    <div>
      <label>{` Sort By: `}</label>
      <button onClick={() => setBy("name")}>Name </button>/
      <button onClick={() => setBy("id")}>ID</button>
      <ul>
        {sortedArr.map((item, index) => {
          return <li key={item.id}>{`${item.name} ${index}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default SortedArrayComponent;
