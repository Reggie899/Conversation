import { useState } from "react";
import "./App.css";

// import Context
import { Counter } from "./Context/Counter";
import { TypingTime } from "./Context/TypingTime";
import { ShowChoicesTime } from "./Context/ShowChoicesTime";
import { SetCountTime } from "./Context/SetCountTime";

// import ConversationBlocks
import StartAnimation from "./StartAnimation";
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
  const [count, setCount] = useState("0");
  const [showChoicesTime, setShowChoicesTime] = useState(0);
  const [typingTime, setTypingTime] = useState(0);
  const [countTime, setCountTime] = useState(0);

  return (
    <div className="App">
      <ShowChoicesTime.Provider value={{ showChoicesTime }}>
        <TypingTime.Provider value={{ typingTime }}>
          <Counter.Provider value={{ count, setCount }}>
            <SetCountTime.Provider value={{ countTime }}>
              {count == 0 ? <StartAnimation/> : null }
              {count == 1 ? <ConversationBlock1 /> : null}
              {count[0] == 2 ? <ConversationBlock2 /> : null}
              {count[0] == 3 ? <ConversationBlock3 /> : null}
              {count[0] == 4 ? <ConversationBlock4 /> : null}
              {count[0] == 5 ? <ConversationBlock5 /> : null}
              {count[0] == 6 ? <ConversationBlock6 /> : null}
              {count[0] == 7 ? <ConversationBlock7 /> : null}
              {count[0] == 8 ? <ConversationBlock8 /> : null}
            </SetCountTime.Provider>
          </Counter.Provider>
        </TypingTime.Provider>
      </ShowChoicesTime.Provider>
      <footer>
        <div>
      <div className="myCode"> <a href="https://github.com/Reggie899/Conversation" target="_blank">HowImetYourFather.org</a></div>
      </div>
      </footer>
    </div>
  );
}

export default App;
