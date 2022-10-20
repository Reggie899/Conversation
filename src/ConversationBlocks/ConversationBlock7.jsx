import SubBlock7dot1 from "../SubBlocks/SubBlock7.1";
import SubBlock7dot2 from "../SubBlocks/SubBlock7.2";
import SubBlock7dot3 from "../SubBlocks/SubBlock7.3";
import SubBlock7dot4 from "../SubBlocks/SubBlock7.4";



import { useContext } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock7() {
  const { count, setCount } = useContext(Counter);

  return (
    <div className="containerBlock">
      {count == 7.1 ? <SubBlock7dot1 /> : null}
      {count == 7.2 ? <SubBlock7dot2 /> : null}
      {count == 7.3 ? <SubBlock7dot3 /> : null}
      {count == 7.4 ? <SubBlock7dot4 /> : null}
    </div>
  );
}
