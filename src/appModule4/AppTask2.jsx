import Task2 from "../tasksModule4/Task2";
import {useState} from "react";

function AppTask2 () {
  const [count, setCount] = useState(0);
  const useStateHook = {count, setCount};

  return (
    <div>
      <h1>{ count }</h1>
      <div>
        <Task2 {...useStateHook}/>
        <Task2 {...useStateHook}/>
      </div>
    </div>
  );
}

export default AppTask2;
