import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [displayAlert, setDisplayAlert] = useState(false);

  return (
    <>
      <h1 data-cy="h1" style={{ textAlign: "center", fontSize: "40px" }}>
        Cypress Testing App
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          type="button"
          data-cy="button"
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            width: "130px",
            height: "40px",
            borderRadius: 7,
            fontWeight: "bolder",
          }}
          onClick={() => setDisplayAlert(!displayAlert)}
        >
          Alert
        </button>
      </div>

      {displayAlert === true && (
        <Alert message="Sucesso" type="success" timeout="5000" />
      )}
    </>
  );
}

export default App
