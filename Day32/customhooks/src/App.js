// import React from "react";
// import "./App.css";
// import FordwardCounter from "./ForwardCounter";
// import BackwardCounter from "./BackwardCounter";

// function App() {
//   return (
//     <React.Fragment>
//       <FordwardCounter></FordwardCounter>
//       <BackwardCounter></BackwardCounter>
//     </React.Fragment>
//   );
// }

// export default App;

import "./App.css";
import React from "react";
import UseLocalStorage from "./UseLocalStorage";
const App = () => {
  const [count, setCount] = UseLocalStorage("count", 0);
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1 style={{ color: "green" }}>
        welcome to my Local storage Custoom Hooks
      </h1>
      <h2>UseLocalStorage</h2>
      <h4>Count - {count}</h4>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
