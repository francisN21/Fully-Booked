import React, { useState } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Saved from "./Components/Saved/Saved";

function App() {
  const [toggle, setView] = useState(true);
  // console.log(setform);

  const search = "Search Book";
  const save = "Saved Book";

  let formButton;

  if (toggle === !(<Saved />)) {
    formButton = search;
  } else {
    formButton = save;
  }
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div className="content-container">
        <button className="btn btn-primary" onClick={() => setView(!toggle)}>
          {formButton}
        </button>
        {toggle ? <Body /> : <Saved />}
      </div>
    </div>
  );
}

export default App;
