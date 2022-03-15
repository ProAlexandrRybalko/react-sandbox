import { Link, Outlet, Routes, Route } from "react-router-dom";
import "../index.css";
import Genre from "../tasksModule4/Genre";

function Layout() {
  return (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/main">Main</Link>
        </header>
        <Outlet/>
    </div>
  )
}

export default Layout;
