import React from "react";
import "./App.css";
import Body from './Body';

function App() {
  
  
  return (
    <div className="App">
      <div>
        <h1>
          Welcome to my Astronomy Picture of the Day!!
          <span role="img" aria-label='go!'>🚀</span>!
        </h1>
      </div>
      <div>
        <Body/>
      </div>
    </div>
  );
}



export default App;
