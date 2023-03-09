import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItemsFromLocale = () => {
      import("../data/data")
        .then((module) => {
          setItems(module.data);
        })
        .catch((e) => {
          console.error(e);
        });
    };
    const fetchItemsFromUrl = async (url) => {
      fetch(url)
        .then((data) => data.json())
        .then(setItems)
        .catch((e) => {
          console.error(e);
        });
    };
    fetchItemsFromLocale();
    // await fetchItemsFromUrl();
    console.log(items);
  }, []);
  return items;
};

export default useItems;
