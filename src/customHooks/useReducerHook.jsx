import { useReducer } from "react";

const initState = { count: 0 };
const stateUpdate = (state, type) => {
  switch (type.action) {
    case "increment":
      console.log("increment: " + Number(state.count + 1));
      return { count: state.count + 1 };
    case "decrement":
      console.log("decrement: " + Number(state.count - 1));
      return { count: state.count - 1 };
    default:
      break;
  }
};
const useReducerHook = () => {
  const [state, dispatch] = useReducer(stateUpdate, initState);

  return { state, dispatch };
};

export default useReducerHook;
