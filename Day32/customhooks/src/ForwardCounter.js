// import React, { useState, useEffect } from "react";
// import Card from "./Card";

// const FordwardCounter = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prevCounter) => prevCounter + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <Card>{counter}</Card>;
// };

// export default FordwardCounter;

import Card from "./Card";
import UseCounter from "./UseCounter";

const FordwardCounter = () => {
  const counter = UseCounter();
  return <Card>{counter}</Card>;
};

export default FordwardCounter;
