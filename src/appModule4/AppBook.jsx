import { Link, Route, Routes, Router } from "react-router-dom";
import "../index.css";
import Layout from "../components/Layout";
import Genre from "../tasksModule4/Genre";
import Year from "../tasksModule4/Year";
import Home from "../tasksModule4/Home";
import Add from "./Add";
import Book from "./Book";

function AppBook() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/main" element={<Home/>}/>
        <Route path="/main/:id" element={<Book/>}/>
        <Route path="/addNew" element={<Add/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default AppBook;
