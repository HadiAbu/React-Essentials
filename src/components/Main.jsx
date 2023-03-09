import React, { useState, Suspense } from "react";
import MainContext from "../context/mainContext";
import MainContextConsumer from "./MainContextConsumer";

const Main = () => {
  const [contextValue, setContextValue] = useState(false);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <MainContext.Provider
        value={{ value: contextValue, setValue: setContextValue }}
      >
        <MainContextConsumer />
      </MainContext.Provider>
    </Suspense>
  );
};

export default Main;
