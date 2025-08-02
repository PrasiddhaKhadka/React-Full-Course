function PropFunction({name="xyz"}){
    // let collegeNames = ['MIT','Standford','Princeton','IIT','Harvard','Cambridge'];
    return (
        <div>
            <p>My name is {name} </p>
            {/* {
                collegeNames.map((collegeName) => <p>{collegeName}</p>)
            }
           */}
        </div>
    )
}

export default PropFunction;