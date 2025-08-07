import TestSecond from "./TestSecond";

function TestFirst(){
    const displayUser = (name) => {
        alert(name);
    }
    return (
        <div>
            <h1>Test First</h1>
            <TestSecond displayUser={displayUser} getUser={getUser}/>
        </div>
    );
}

export default TestFirst