function FuncProps({greet}) {
    return (
        <div>
            <button onClick={() => greet()}>Greet!</button>
        </div>
    );
}

export default FuncProps;