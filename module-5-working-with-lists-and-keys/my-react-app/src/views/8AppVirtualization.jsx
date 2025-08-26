import { useState } from "react";

import VirtualizedList from "../examples/8-2VirtualizedList";
import NonVirtualizedList from "../examples/8-1NonVirtualizedList";

function AppVirtualization() {
  const [useVirtual, setUseVirtual] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setUseVirtual(!useVirtual)}>
        {useVirtual ? "Show Non-Virtualized" : "Show Virtualized"}
      </button>
      <div style={{ marginTop: 20 }}>
        {useVirtual ? <VirtualizedList /> : <NonVirtualizedList />}
      </div>
    </div>
  );
}

export default AppVirtualization;
