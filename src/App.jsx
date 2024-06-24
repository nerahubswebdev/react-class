import React from "react";
import { useAuthContext } from "./context/auth-context";

const App = () => {
  const { userData } = useAuthContext();

  console.log("the validated user data => ", userData);
  return (
    <div>
      <p className="text-xs md:text-lg lg:text-3xl font-bold underline bg-red-600 ">
        Hello
      </p>
    </div>
  );
};

export default App;
