import React, { Suspense, useEffect } from "react";
import { utilsSortFunc } from "./utils/utils";
import useItems from "./customHooks/useItems";
import useReducerHook from "./customHooks/useReducerHook";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

//lazy loading components
const Main = React.lazy(() => import("./components/Main"));
const Timer = React.lazy(() => import("./components/Timer"));
const ListPagination = React.lazy(() => import("./components/ListPagination"));
const Counter = React.lazy(() => import("./components/Counter"));
const SortedArrayComponent = React.lazy(() =>
  import("./components/SortedArrayComponent")
);

// lazy loading static data with import
// import("./utils/data").then((module) => {
//   console.log(module.data);
// });

function App() {
  const items = useItems();
  const { state, dispatch } = useReducerHook();
  useEffect(() => {
    console.log(state);
    dispatch({ action: "increment" });
  }, []);

  // demonstration of a good use for useCallback
  const sortFunc = React.useCallback(utilsSortFunc, []);

  if (items.length == 0) return null;
  return (
    <div className="App">
      <Router>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <NavLink to="/">
            <button>{` Home `}</button>
          </NavLink>
          <NavLink to="/sorted-array">
            <button>{`  Sorted Array  `}</button>
          </NavLink>
          <NavLink to="/pagination">
            <button>{`  Pagination  `}</button>
          </NavLink>
          <NavLink to="/timer">
            <button>{`  Timer  `}</button>
          </NavLink>
          <NavLink to="/counter">
            <button>{`  Counter  `}</button>
          </NavLink>
        </div>
        <Suspense fallback={<>loading...</>}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route
              path="/sorted-array"
              element={
                <SortedArrayComponent items={items} sortFunc={sortFunc} />
              }
            ></Route>
            <Route path="/pagination" element={<ListPagination />}></Route>
            <Route path="/timer" element={<Timer />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
