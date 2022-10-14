import { useState } from "react";
import "./App.css";

// import Context
import { Counter } from "./Context/Counter";

// import ConversationBlocks
import ConversationBlock1 from "./ConversationBlocks/ConversationBlock1";
import ConversationBlock2 from "./ConversationBlocks/ConversationBlock2";
import ConversationBlock3 from "./ConversationBlocks/ConversationBlock3";
import ConversationBlock4 from "./ConversationBlocks/ConversationBlock4";
import ConversationBlock5 from "./ConversationBlocks/ConversationBlock5";
import ConversationBlock6 from "./ConversationBlocks/ConversationBlock6";
import ConversationBlock7 from "./ConversationBlocks/ConversationBlock7";
import ConversationBlock8 from "./ConversationBlocks/ConversationBlock8";
import ConversationBlock9 from "./ConversationBlocks/ConversationBlock9";
import ConversationBlock10 from "./ConversationBlocks/ConversationBlock10";

function App() {
  // state variables
  const [count, setCount] = useState("1");

  return (
    <div className="App">
      <Counter.Provider value={{ count, setCount }}>
        {count == 1 ? <ConversationBlock1 /> : null}
        {count[0] == 2 ? <ConversationBlock2 /> : null}
      </Counter.Provider>
    </div>
  );
}

export default App;
