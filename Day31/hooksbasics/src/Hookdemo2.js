import React, { useState, useEffect } from "react";
function Hookdemo2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });
  return (
    <div>
      <h1>Hook2 useEffect Example</h1>
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
}

export default Hookdemo2;
