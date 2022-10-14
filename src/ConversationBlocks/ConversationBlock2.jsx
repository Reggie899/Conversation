import SubBlock2dot1 from "../SubBlocks/SubBlock2.1";
import SubBlock2dot2 from "../SubBlocks/SubBlock2.2";
import { useContext } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock2() {
  const { count, setCount } = useContext(Counter);

  return (
    <div className="container">
      {count == 2.1 ? <SubBlock2dot1 /> : null}
      {count == 2.2 ? <SubBlock2dot2 /> : null}
    </div>
  );
}
