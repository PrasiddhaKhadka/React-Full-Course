import { useState } from "react";

function RadioButtonsLogic() {
    const [gender, setGender] = useState("");
    const handleGender = (e)=>{
        setGender(e.target.value);
    }
  return (
    <div>
        {/* if Name is different for different input then we can select both */}
      <input type="radio" id="male" name="gender" onChange={handleGender} value={"male"}/>
      <label htmlFor="male">Male</label>
      <br />
      {/* Check vani pani huncha attribute jun lay by default set garcha */}
      <input type="radio" id="female" name="gender" onChange={handleGender} value={"female"}/>
      <label htmlFor="female">Female</label>
      <h1 style={{color: gender === "male" ? "green" : "red"}}>{gender}</h1>

      <h1>Select City</h1>
      <select name="city" defaultValue={"Pune"}>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select>
      
    </div>
  );
}

export default RadioButtonsLogic;
