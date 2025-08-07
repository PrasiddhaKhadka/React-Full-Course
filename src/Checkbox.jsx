import { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState([]);

 
  const handleChange = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setChecked([...checked, e.target.value]);
    }
    else{
      // filter doesnot modify old array rather creates a new array 
      setChecked([...checked.filter((item) => item !== e.target.value)])
    }
      
  };

  return (
    <div>
      <h1>Checkbox</h1>
      <input
        type="checkbox"
      
        id="python"
        value={"PYTHON"}
        onChange={(e)=>handleChange(e)}
      />
      <label htmlFor="python" >PYTHON</label>
      <br />
      <input type="checkbox" id="js" value={"JS"} onChange={handleChange}  />
      <label htmlFor="js">JS</label>
      <br />

      <input type="checkbox"  id="java" value={"JAVA"} onChange={handleChange} />
      <label htmlFor="java">JAVA</label>
      <br />

      <input type="checkbox" id="php" value={"PHP"} onChange={handleChange} />
      <label htmlFor="php">PHP</label>
      <br />
      <h3>{checked}</h3>
      <br />
    </div>
  );
}

export default Checkbox;
