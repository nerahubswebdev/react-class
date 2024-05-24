import React from "react";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
      <p className="text-xs md:text-lg lg:text-3xl font-bold underline bg-red-600 ">
        Hello
      </p>
    </div>
  );
};

export default App;
