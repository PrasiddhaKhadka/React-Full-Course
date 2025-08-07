import { useRef } from "react"

function UserRefrenceFunction(){

    const inputRef = useRef(null);

    const handleFocus = () => {
        console.log(inputRef);          
        console.log(inputRef.current);   
        inputRef.current.focus();    
        inputRef.current.style.color = "green";   
        inputRef.current.value = "";
    }

    return (
        <>
        <div>
            <h1>UseRefrence</h1>
            <input ref={inputRef}  type="text" name="firstname" />
            <button onClick={()=> handleFocus()}> Submit</button>

        </div>
        </>
    )
}

export default UserRefrenceFunction