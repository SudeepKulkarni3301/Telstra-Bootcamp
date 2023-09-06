// import { useState, useEffect } from "react";
// import Card from "./Card";

// const BackwardCounter = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prevCounter) => prevCounter - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <Card>{counter}</Card>;
// };

// export default BackwardCounter;

import Card from "./Card";
import UseCounter from "./UseCounter";

const BackwardCounter = () => {
  const counter = UseCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
