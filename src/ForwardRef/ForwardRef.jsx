function ForwardRef(){
    return (
        <div>
            <h1>Forward Ref</h1>
        </div>
    )
}

export default ForwardRef


// before react 19 
// function functionname(props, ref) =>{}

// After react 19
// function functionName(props){

//     can access using props.ref
// }