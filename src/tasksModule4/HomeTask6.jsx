import { useState } from "react";
import Task6Increment from "./Task6Increment";
import Task6Decrement from "./Task6Decrement";
import { Link } from "react-router-dom";

export default function HomeTask6 () {

    const [countDecr, setCountDecr] = useState(0);
    const [countIncr, setCountIncr] = useState(0);

    return (
        <main>
            <div className="tabs">
                <Link to="/increment" onClick={() => setCountIncr(countIncr + 1)}>Increment tab</Link>
                <Link to="/decrement" onClick={() => setCountDecr(countDecr - 1)}>Decrement tab</Link>
            </div>
            <Task6Increment>{ countIncr }</Task6Increment>
            <Task6Decrement>{ countDecr }</Task6Decrement>
        </main>
    )
}