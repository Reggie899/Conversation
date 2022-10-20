import SubBlock3dot1 from "../SubBlocks/SubBlock3.1";
import SubBlock3dot2 from "../SubBlocks/SubBlock3.2";
import SubBlock3dot3 from "../SubBlocks/SubBlock3.3";
import SubBlock3dot4 from "../SubBlocks/SubBlock3.4";

import { useContext } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock2() {
  const { count, setCount } = useContext(Counter);

  return (
    <div className="containerBlock">
      {count == 3.1 ? <SubBlock3dot1 /> : null}
      {count == 3.2 ? <SubBlock3dot2 /> : null}
      {count == 3.3 ? <SubBlock3dot3 /> : null}
      {count == 3.4 ? <SubBlock3dot4 /> : null}

    </div>
  );
}
