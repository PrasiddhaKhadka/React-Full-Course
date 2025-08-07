import { useState } from "react";
import ClockStyle from "./ClockStyle";

function ClockTimer() {

    let time = new Date().toLocaleTimeString();
    const [timer, setTimer] = useState(time);
    const [color, setColor] = useState("red");


    const updateTimer = () => {
        time = new Date().toLocaleTimeString();
        setTimer(time);
    }
    const handleColorChange = (newColor) => {
        setColor(newColor);
    };
    setInterval(updateTimer);
    return (
        <div>
            <ClockStyle onColorChange={handleColorChange} />
            <h1>Timer</h1>
            <h1 style={{color: color}}>{timer}</h1>
            
            
        </div>
    );
}

export default ClockTimer;