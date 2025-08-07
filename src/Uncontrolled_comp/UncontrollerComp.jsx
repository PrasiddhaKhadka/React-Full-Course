function UncontrolledComp() {
    function handleForm(event){
       const user = document.querySelector("#fname").value;
       const userlastname = document.getElementById("lname").value;
       console.log(user,userlastname);
    }
    return (
        <div>
            <h1>Uncontrolled Component</h1>
            <form action="#" autoCapitalize="on" autoComplete="on" autoCorrect="on" spellCheck="true"></form>
            <label htmlFor="fname"> First Name</label>
            <input type="text" name="firstname" id="fname" />
            <br /><br />
            <label htmlFor="lname" name="lastname">last Name</label>
            <input type="text" name="lastname" id="lname" />
            <br /><br />
            <button onClick={()=>handleForm()}>Submit</button>

        </div>
    );
}

export default UncontrolledComp;