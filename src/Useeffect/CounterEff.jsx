import CounterComp from "./CounterComp";
import { useState } from "react";

function CounterEff() {
    const [count, setCount] = useState(0);

        return (
            <div>
                <CounterComp count={count}/>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }

export default CounterEff