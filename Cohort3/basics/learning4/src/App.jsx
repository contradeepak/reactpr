
import React from "react";

function App() {
  return (
    <div style={{ display: "flex", background: "gray" }}>
      <Card>
        <div style={{ color: "green" }}>
          What do you want to post <br/>
          <input type="text" /><br/>
         What do you want to post <br/><br/>
          <input type="text" />
        </div>
      </Card>
      <Card>
        hi there
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        color: "black",
        padding: 10,
        margin: 10
      }}
    >
      {children}
    </div>
  );
}

export default App;
