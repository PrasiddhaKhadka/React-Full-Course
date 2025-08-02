import { useState } from "react";

function Toogle() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      {/* Main content */}
      <div
        style={{
          backgroundColor: "red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80vw",
        }}
      >
        <h1>"Log In Now"</h1>
        <button onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? "Logout" : "Login"}
        </button>
      </div>

      {/* Overlay */}
      {isClicked && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            inset: "0",
            backgroundColor: "green",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          <button
            onClick={() => setIsClicked(!isClicked)}
            style={{
              backgroundColor: "red",
              color: "white",
              width: "100px",
              height: "50px",
            }}
          >
            {isClicked ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Toogle;
