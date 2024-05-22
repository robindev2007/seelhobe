import React from "react";
import TopDealsToday from "./components/TopDealsToday";
import Featured from "./components/Featured";

const HomePage = () => {
  return (
    <div>
      <Featured />
      <TopDealsToday />
    </div>
  );
};

export default HomePage;
