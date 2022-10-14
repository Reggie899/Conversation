import { useContext, useState } from "react";
import { Counter } from "../Context/Counter";

export default function ConversationBlock1() {

    const {count, setCount} = useContext(Counter);

    return (
        <div>
                 <h1>2</h1>
                 <h1>2.2</h1>
        </div>
    )
}