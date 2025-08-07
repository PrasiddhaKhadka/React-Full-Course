import { useFormStatus } from "react-dom";

function UseFormStatus(){

    const handleSubmit = (e) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Form submitted");
        },5000)
    })
    }

    function CustomForm(){
        const {pending} = useFormStatus();
        console.log(pending);

        return(
            <div>
                <input type="text" placeholder="Enter User Name"/>
                <br />
                <br />
                <input type="text" placeholder="Enter Password" />
                <br />
                <br />
                <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
            </div>
        )
    }

    return (
        
        <div>
            <h1>UseFormStatus</h1>
            <form action={handleSubmit}>
            <CustomForm />
            </form>
        </div>
    )
}

export default UseFormStatus