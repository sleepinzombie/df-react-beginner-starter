import { useState } from "react";

import DataFetcher from "../examples/6-1DataFetcher";
import WindowSize from "../examples/6-2WindowResize";
import NameForm from "../examples/6-3NameForm";
import PageViewTracker from "../examples/6-4PageViewTracker";

function AppUseCases() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <div>
        <h3>Data Fetching</h3>
        <DataFetcher />
      </div>
      <hr style={{ margin: "2rem 0" }} />

      <div>
        <h3>Window Resize Tracker</h3>
        <WindowSize />
      </div>
      <hr style={{ margin: "2rem 0" }} />

      <div>
        <h3>Local Storage Sync</h3>
        <NameForm />
      </div>
      <hr style={{ margin: "2rem 0" }} />

      <div>
        <h3>Simulated Page Navigation</h3>

        <div style={{ marginBottom: "1rem" }}>
          <button onClick={() => setPage("Home")}>Home</button>
          <button onClick={() => setPage("About")}>About</button>
          <button onClick={() => setPage("Contact")}>Contact</button>
        </div>

        <PageViewTracker page={page} />
      </div>
    </>
  );
}

export default AppUseCases;
