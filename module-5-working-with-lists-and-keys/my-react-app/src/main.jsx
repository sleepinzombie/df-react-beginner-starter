import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import AppIndexKeys from "./views/1AppIndexKeys";
import AppDynamicKeys from "./views/2AppDynamicKeys";
import AppTodoList from "./views/3AppTodoList";
import AppCompletedTodoList from "./views/4AppCompletedTodoList";
import AppCategoryList from "./views/5AppCategoryList";
import AppTodoListModular from "./views/6AppTodoListModular";
import AppVirtualization from "./views/8AppVirtualization";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <h2>Index Keys</h2>
    <div className="app-box">
      <AppIndexKeys />
    </div>

    <h2>Dynamic Keys</h2>
    <div className="app-box">
      <AppDynamicKeys />
    </div>

    <h2>Todo List</h2>
    <div className="app-box">
      <AppTodoList />
    </div>

    <h2>Completed Todo List</h2>
    <div className="app-box">
      <AppCompletedTodoList />
    </div>

    <h2>Category List</h2>
    <div className="app-box">
      <AppCategoryList />
    </div>

    <h2>Todo App</h2>
    <div className="app-box">
      <AppTodoListModular />
    </div>

    <h2>Virtualization</h2>
    <div className="app-box">
      <AppVirtualization />
    </div> */}
  </StrictMode>
);
