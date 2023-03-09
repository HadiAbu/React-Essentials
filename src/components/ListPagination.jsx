import React from "react";
import { FixedSizeList } from "react-window";
import useItems from "../customHooks/useItems";

// instead of pagination we can use react-window lib for performance
const ItemRenderer = ({ data, index, style }) => {
  // Access the items array using the "data" prop:
  const item = data[index];
  return <div style={style}>{item.name}</div>;
};

const ListPagination = () => {
  const items = useItems();

  return (
    <div>
      <h2>List Pagination:</h2>
      <FixedSizeList
        itemData={items}
        itemCount={items.length}
        height={150}
        itemSize={35}
        width={300}
      >
        {ItemRenderer}
      </FixedSizeList>
    </div>
  );
};

export default ListPagination;
