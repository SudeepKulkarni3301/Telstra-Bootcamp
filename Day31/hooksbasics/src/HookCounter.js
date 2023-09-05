// import React, { useState } from "react";

// function HookCounter() {
//   let [count, setCount] = useState(10);

//   return (
//     <div>
//       <h1>HookCounter</h1>
//       <button onClick={() => setCount(count + 1)}>Click {count}</button>
//     </div>
//   );
// }

// export default HookCounter;

import React, { useState } from "react";

function HookCounter() {
  const [name, setName] = useState({
    first_name: "",
    last_name: "",
    Email: "",
    Phone: "",
  });
  return (
    <form>
      <input
        type="text"
        value={name.first_name}
        onChange={(e) => setName({ ...name, first_name: e.target.value })}
        placeholder="Enter First name"
      />
      <br />
      <br />
      <input
        type="text"
        value={name.last_name}
        onChange={(e) => setName({ ...name, last_name: e.target.value })}
        placeholder="Enter last name"
      />
      <br />
      <br />

      <input
        type="email"
        value={name.Email}
        onChange={(e) => setName({ ...name, Email: e.target.value })}
        placeholder="Enter Email"
      />
      <br />
      <br />
      <input
        type="integer"
        value={name.Phone}
        onChange={(e) => setName({ ...name, Phone: e.target.value })}
        placeholder="Enter phone number"
      />
      <br />
      <br />
      <h2>Your First Name is {name.first_name}</h2>
      <h2>Your Last Name is {name.last_name}</h2>

      <h2>Your Email is {name.Email}</h2>
      <h2>Your Phone number is {name.Phone}</h2>
    </form>
  );
}

export default HookCounter;
