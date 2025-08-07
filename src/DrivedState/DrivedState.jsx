import { useRef, useState } from "react";

function DrivedStateFunction() {
  const [notes, setNotes] = useState([]);
  const [index, setIndex] = useState(null);
  const [inputError, setInputError] = useState(false);

  const userInput = useRef(null);

  const totalListLength = notes.length;

  const addNote = () => {
    const notedata = userInput.current.value;
    if (notedata.trim() !== "") {
      setInputError(false);
      if (index !== null) {
        const updatedNotes = [...notes];
        updatedNotes[index] = notedata;
        setNotes(updatedNotes);
        setIndex(null);
      } else {
        setNotes([...notes, notedata]);
        console.log(notes);
      }
    } else {
      return setInputError(true);
    }
    userInput.current.value = "";
  };

  const editNote = (index) => {
    setIndex(index);
    userInput.current.value = notes[index];
  };

  const deleteNote = (dataToRemove) => {
    // 🔭🔭🔭🔭🔭 // ONE WAY TO GET INDEX  🔭🔭🔭🔭🔭
    //   const updatednNotes = [...notes];
    //  🔭🔭🔭🔭🔭 // splice(starting index, totalno of item to be removed) 🔭🔭🔭
    //   updatednNotes.splice(index, 1);
    //   setNotes(updatednNotes);

    // { ALTERANTE WAY YOU CAN REMOVE IS }
    setNotes([...notes.filter((note) => note !== dataToRemove)]);
  };
  return (
    <div>
      <h1>Drived State</h1>
      <div>
        <input
          type="text"
          placeholder="Add your note here"
          ref={userInput}
          style={
            inputError === false
              ? {
                  width: "300px",
                  height: "30px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
                  marginRight: "10px",
                }
              : {
                  border: "white",
                  marginBottom: "10px",
                  width: "300px",
                  height: "30px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  boxShadow: "0px 0px 5px 0px rgba(180, 8, 8, 1)",
                  marginRight: "10px",
                }
          }
        />
        <button
          onClick={addNote}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addNote();
            }
          }}
          style={{
            backgroundColor: "green",
            textAlign: "center",
            alignItems: "center",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
          }}
        >
          Add Note
        </button>

        {notes !== null &&
          notes.map((note, index) => {
            return (
              <div>
                <h1 key={index}>{note}</h1>
                <div>
                  <button
                    onClick={() => {
                      editNote(index);
                    }}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "green",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteNote(note)}>Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DrivedStateFunction;
