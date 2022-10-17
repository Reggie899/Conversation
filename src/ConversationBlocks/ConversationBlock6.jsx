import SubBlock6dot1 from "../SubBlocks/SubBlock6.1";
import SubBlock6dot2 from "../SubBlocks/SubBlock6.2";
import SubBlock6dot3 from "../SubBlocks/SubBlock6.3";
import SubBlock6dot4 from "../SubBlocks/SubBlock6.4";
import SubBlock6dot5 from "../SubBlocks/SubBlock6.5";

import { useContext } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock6() {
  const { count, setCount } = useContext(Counter);

  return (
    <div className="container">
      {count == 6.1 ? <SubBlock6dot1 /> : null}
      {count == 6.2 ? <SubBlock6dot2 /> : null}
      {count == 6.3 ? <SubBlock6dot3 /> : null}
      {count == 6.4 ? <SubBlock6dot4 /> : null}
      {count == 6.5 ? <SubBlock6dot5 /> : null}
    </div>
  );
}
