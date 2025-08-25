import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import AppLifecycleOverview from "./views/1AppLifecycleOverview";
import AppClassLifecycle from "./views/2AppClassLifecycle";
import AppEffectDemo from "./views/3AppEffectDemo";
import AppEffectDepsAndCleanup from "./views/4AppEffectDepsAndCleanup";
import AppMultipleEffects from "./views/5AppMultipleEffects";
import AppUseCases from "./views/6AppUseCases";
import AppInfiniteLoop from "./views/7AppInfiniteLoop";
import AppLayoutEffectDemo from "./views/8AppLayoutEffectDemo";
import AppAsyncEffectDemo from "./views/9AppAsyncEffectDemo";
import AppDebugEffect from "./views/10AppDebugEffect";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <h2>Lifecycle Overview</h2>
    <div className="app-box">
      <AppLifecycleOverview />
    </div> */}

    {/* <h2>Class Component Lifecycle</h2>
    <div className="app-box">
      <AppClassLifecycle />
    </div> */}

    {/* <h2>Effect Hook Demo</h2>
    <div className="app-box">
      <AppEffectDemo />
    </div> */}

    {/* <h2>Effect Hook with Cleanup</h2>
    <div className="app-box">
      <AppEffectDepsAndCleanup />
    </div> */}

    {/* <h2>Multiple Effects Demo</h2>
    <div className="app-box">
      <AppMultipleEffects />
    </div> */}

    {/* <h2>UseEffect Use Case</h2>
    <div className="app-box">
      <AppUseCases />
    </div> */}

    {/* <h2>Infinite Loop Demo</h2>
    <div className="app-box">
      <AppInfiniteLoop />
    </div> */}

    {/* <h2>Layout Effect Demo</h2>
    <div className="app-box">
      <AppLayoutEffectDemo />
    </div> */}

    {/* <h2>Async Effect Demo</h2>
    <div className="app-box">
      <AppAsyncEffectDemo />
    </div> */}

    {/* <h2>Debug Effect Demo</h2>
    <div className="app-box">
      <AppDebugEffect />
    </div> */}
  </StrictMode>
);
