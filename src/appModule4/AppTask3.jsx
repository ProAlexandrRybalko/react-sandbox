import { Link, Route, Routes, Router, Redirect } from "react-router-dom";
import "../index.css";
import Layout from "../components/Layout";
import Genre from "../tasksModule4/Genre";
import Year from "../tasksModule4/Year";
import Home from "../tasksModule4/Home";

function AppTask3() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/:genre" element={<Genre/>}/>
        <Route path="/:genre/:year" element={ <Year/> }/>
      </Route>
    </Routes>
</div>
  )
}

export default AppTask3;
