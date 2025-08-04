import { useState } from "react";
function ClockStyle( { onColorChange}){
    return (
        <div>
            <select name="clockcolor" id="colors" onChange={(e) => onColorChange(e.target.value)}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>

            </select>
        </div>
    )

}

export default ClockStyle