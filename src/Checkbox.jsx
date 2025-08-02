import { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState([]);
  const handleSkills = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      if (!checked.includes(value)) {
        setChecked([...checked, value]);
      }
    } else {
      setChecked(checked.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h1>Checkbox</h1>
      <input
        type="checkbox"
        onChange={handleSkills}
        id="python"
        value={"PYTHON"}
      />
      <label htmlFor="python">PYTHON</label>
      <br />
      <input type="checkbox" onChange={handleSkills} id="js" value={"JS"} />
      <label htmlFor="js">JS</label>
      <br />

      <input type="checkbox" onChange={handleSkills} id="java" value={"JAVA"} />
      <label htmlFor="java">JAVA</label>
      <br />

      <input type="checkbox" onChange={handleSkills} id="php" value={"PHP"} />
      <label htmlFor="php">PHP</label>
      <br />
      <h3>{checked.toString()}</h3>
    </div>
  );
}

export default Checkbox;
