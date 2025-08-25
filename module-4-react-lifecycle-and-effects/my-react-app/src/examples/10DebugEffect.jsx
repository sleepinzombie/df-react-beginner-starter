import { useState } from "react";

function DebugEffect() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((c) => c + 1)}>Increment ({count})</button>
  );
}

export default DebugEffect;
