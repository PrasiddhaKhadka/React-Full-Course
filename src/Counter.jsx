import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  function updateCounter() {
    setCounter(counter + 1);
  }
  function decrementCounter(){
    if (counter > 0) {
      setCounter(counter - 1);
      
    }
    return
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={updateCounter}>Increment</button>

    </div>
  );
}

export default Counter;
