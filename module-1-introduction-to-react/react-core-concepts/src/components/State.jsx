import { useState } from "react";

export const State = () => {
  // Declare a state variable called count, initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React useState Example</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
