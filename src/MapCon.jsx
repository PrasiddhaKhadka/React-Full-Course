function MapCon() {
    const userData =[
        {
            id: 1,
            name: "Dhruv",
            age: 20
        },
        {
            id: 2,
            name: "Ram",
            age: 20
        },
        {
            id: 3,
            name: "Shyam",
            age: 20
        }

    ]
    return (
        <div>
            <h1>MapConcepts</h1>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default MapCon;