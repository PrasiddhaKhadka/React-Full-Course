function Datas() {
    const dataList=[
        {
            id: 1,
            collegename: "MIT",
            location: "Pune",
            course: "MBA",
            toppers:[
                {
                    name: "Dhruv",
                    age: 20
                },
                {
                    name: "Ram",
                    age: 20
                },
                {
                    name: "Shyam",
                    age: 20
                }
            ],
        },
         {
            id: 2,
            collegename: "Standford",
            location: "USA",
            course: "Computer Science",
            toppers:[
                {
                    name: "Hari",
                    age: 20
                },
                {
                    name: "Krishna",
                    age: 20
                },
                {
                    name: "Laxman",
                    age: 20
                }
            ],
        },
    ]
    return (
        <div>
            <h1>Datas</h1>
            {
                dataList.map((datas)=> {
                    return (
                        <div key={datas.id} style={{border: "1px solid white", borderRadius: "10px", padding: "10px", margin: "10px" }}>
                            <p>College Name: {datas.collegename}</p>
                            <p>Location: {datas.location}</p>
                            <p>Course: {datas.course}</p>
                            <p>Toppers</p>
                            <div>
                                {
                                    datas.toppers.map((topper) => {
                                        return (
                                            <div key={topper.name} style={{border: "1px solid white", borderRadius: "10px", padding: "10px", margin: "10px"}}>
                                                <p>Name: {topper.name}</p>
                                                <p>Age: {topper.age}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )

                                
                })
            }
        </div>
    );
}

export default Datas;