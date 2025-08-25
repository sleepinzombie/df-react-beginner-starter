import { useState } from "react";

function InfiniteLoopBad() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return <p>Count: {count}</p>;
}

export default InfiniteLoopBad;
