import { useState } from "react";

function InputValidation(){
    const [userName, setUserName] = useState("");
    return (
        <div>
            <h1>Input Validation</h1>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter User Name"/>
            <div className="clear" style={{display: "flex", justifyContent: "center", gap: "10px"}}>
             <h1>Hello {userName}</h1>
             <button onClick={() => setUserName("")}>Clear</button>
           </div>
        </div>
    )
}

export default InputValidation;