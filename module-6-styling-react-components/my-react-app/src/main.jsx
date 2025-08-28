import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";

import AppInlineStyles from "./views/1AppInlineStyles";
import AppTraditionalCss from "./views/2TraditionalCss";
import AppScss from "./views/3AppScss";
import AppCssModules from "./views/4AppCssModules";
import AppStyledComponents from "./views/5AppStyledComponents";
import AppTailwindCss from "./views/6AppTailwindCss";
import AppTheming from "./views/7AppTheming";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <h2>Inline Styles</h2>
    <div className="app-box">
      <AppInlineStyles />
    </div>

    <h2>Traditional CSS</h2>
    <div className="app-box">
      <AppTraditionalCss />
    </div>

    <h2>SCSS</h2>
    <div className="app-box">
      <AppScss />
    </div>

    <h2>CSS Modules</h2>
    <div className="app-box">
      <AppCssModules />
    </div>

    <h2>Styled Components</h2>
    <div className="app-box">
      <AppStyledComponents />
    </div>

    <h2>Tailwind CSS</h2>
    <div className="app-box">
      <AppTailwindCss />
    </div>

    <h2>Theming</h2>
    <div className="app-box">
      <AppTheming />
    </div> */}
  </StrictMode>
);
