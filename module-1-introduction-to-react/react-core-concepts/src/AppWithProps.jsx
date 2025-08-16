import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainWithProps } from "./components/MainWithProps";

function AppWithProps() {
  return (
    <div>
      <Header />
      <MainWithProps
        title={"I am a title"}
        description={"I am a description"}
      />
      <MainWithProps
        title={"Another title"}
        description={"Another description"}
      />
      <Footer />
    </div>
  );
}

export default AppWithProps;
