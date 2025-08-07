function TestSecond({displayUser}){
    const name = "Dhruv";
    return (
        <div>
           <button onClick={() => displayUser(name)}>Display User</button>
        </div>
    );
}

export default TestSecond