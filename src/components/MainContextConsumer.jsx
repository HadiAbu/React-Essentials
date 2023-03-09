import React, { useContext } from "react";
import MainContext from "../context/mainContext";
import useReducerHook from "../customHooks/useReducerHook";

const MainContextConsumer = () => {
  const main = useContext(MainContext);
  const { state, dispatch } = useReducerHook();
  const handler = (v) => {
    return (e) => console.log(e, v);
  };
  return (
    <div>
      <h2>Main Context Manipulation: </h2>
      <label>
        Main Context value:{" "}
        <label style={{ border: "red 1px solid" }}>
          {`${main.value ? "Triggered" : "Not triggered"}`}
        </label>
      </label>
      <br />
      <input
        type="button"
        onClick={(e) => main.setValue(!main.value)}
        value="click to change context value"
      />
      <br />
      <br />
      <br />
      <label htmlFor="">Reducer hook testing</label>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch({ action: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ action: "decrement" })}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default MainContextConsumer;
