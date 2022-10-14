import { useState } from "react";
import './App.css';

// import Context
import { Counter } from "./Context/Counter";

// import ConversationBlocks
import ConversationBlock1 from "./ConversationBlocks/ConversationBlock1";

function App() {

// state variables
const [count, setCount] = useState(0);


  return (
    <div className="App">
            <Counter.Provider value={{ count, setCount }}>
    {count == 0 ? <ConversationBlock1 /> :null}  
      </Counter.Provider>
     </div>
  );
}

export default App;
