import { useContext, useState } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock1() {

    const {count, setCount} = useContext(Counter);

    return (
        <div>
                 <h1>Hey wie geht's?</h1>
                 <h1>Gut</h1>
<button onClick={() => setCount(1)}>Click</button>
        </div>
    )
}