import React from "react";
import BasicInfo from "./Components/Hard";
// now it can be called like if it was an html element (kind of like a variable)
function App() {
  return (
    <div>
      <BasicInfo></BasicInfo>
    </div>
    //everything must go inside the div element or these tags <> </>
    // the props go inside of the tags as if they were attributes!!!
  );
}

export default App;

// This is a functions that can be called on in index.js file
