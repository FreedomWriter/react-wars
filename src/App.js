import React from "react";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Crawl from "./components/CrawlComponent/Crawl";
import BodyComp from "./components/BodyComponents/BodyComp";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Crawl />
      </div>
      <div>
        <BodyComp />
      </div>
    </div>
  );
};

export default App;
