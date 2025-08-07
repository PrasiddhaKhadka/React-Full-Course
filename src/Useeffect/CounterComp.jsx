import { useEffect } from "react";

function CounterComp({count}) {
    
    
    function updateCount(){
        console.log("Updating Count");
    }

    useEffect(()=>{
        updateCount(); 
    }, [])
    
    return (
        <div>
            <h1>Counting Times: {count}</h1>
        </div>
    );
}

export default CounterComp;