import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Toogle from "./Toogle";
import PropFunction from "./Props";
import FuncProps from "./Fun_Props";
import Wrapper from "./Wrapper";
import InputValidation from "./Input_Validation";
import Checkbox from "./Checkbox";
import RadioButtonsLogic from "./Radio_Btns";
import MapCon from "./MapCon";
import ClockTimer from "./ClockProject/ClockTimer";
import Datas from "./NestedLoop/Datas";
import CounterEff from "./Useeffect/CounterEff";
import UserRefrenceFunction from "./UseRef/UseRef";
import UncontrolledComp from "./Uncontrolled_comp/UncontrollerComp";
import TestFirst  from "./PassingFunctionComponent/TestFirst";
import UseFormStatus  from "./UseFormStatus/useformstatus";
import UserTransitionCompnent from "./UserTransition/UserTransitionComp";
import DrivedStateFunction from "./DrivedState/DrivedState";

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
      {/* <button onClick={() => myName("Dhruv")}>Click Dhruv</button>
      <button onClick={() => myName("Ram")}>Click Ram</button>

      <h1>{fruit}</h1>
      <button onClick={() => changeFruitName("Banana")}>
        {" "}
        ChangeFruitName
      </button>

      <Counter/>
      <Toogle/>
      <PropFunction name="Bruce Wayne" />
      <FuncProps greet={() => alert("Hello")}/>
      <Wrapper>
        <p style={{color:"red" ,backgroundColor:"white"}}>This is an example of Wrapper which is basically rendering the html code inside the wrapper</p>
      </Wrapper>
      <InputValidation/>
      <Checkbox/>
      <RadioButtonsLogic />
      <MapCon />
      <Datas /> */}

      {/* <ClockTimer /> */}

      {/* <CounterEff /> */}


      {/* <UncontrolledComp /> */}
      {/* <TestFirst /> */}
      {/* <UseFormStatus />

      <UserTransitionCompnent />   */}

      <DrivedStateFunction />
        {/* emptycontainer */}
        <div className="emptycontainer" style={ {height:"100px"}}/>      

      {/* <UserRefrenceFunction /> */}

    </>
  );
}

export default App;
