import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Toogle from "./Toogle";

// function myName(myName){
//   alert(myName);
// }
function App() {
  let userName = "Dhruv";

  // { Function Shadowing }
  function myName(myName) {
    alert(myName);
  }

  const [fruit, setFruit] = useState("Apple");

  function changeFruitName(fruitName) {
    setFruit(fruitName);
  }

  return (
    <>
      <button onClick={() => myName("Dhruv")}>Click Dhruv</button>
      <button onClick={() => myName("Ram")}>Click Ram</button>

      <h1>{fruit}</h1>
      <button onClick={() => changeFruitName("Banana")}>
        {" "}
        ChangeFruitName
      </button>

      <Counter/>
      <Toogle/>
    </>
  );
}

export default App;
