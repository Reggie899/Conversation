import SubBlock9dot1 from "../SubBlocks/SubBlock9.1";
import SubBlock9dot2 from "../SubBlocks/SubBlock9.2";



import { useContext } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock9() {
  const { count, setCount } = useContext(Counter);

  return (
    <div className="containerBlock">
      {count == 9.1 ? <SubBlock9dot1 /> : null}
      {count == 9.2 ? <SubBlock9dot2 /> : null}
    </div>
  );
}
