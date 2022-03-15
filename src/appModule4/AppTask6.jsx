import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../tasksModule4/Home";
import Task6Increment from "../tasksModule4/Task6Increment";
import Task6 from "../tasksModule4/Task6Increment";
import HomeTask6 from "../tasksModule4/HomeTask6"

export default function AppTask6 () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomeTask6/>}/>
                <Route path="/increment" element={<HomeTask6/>}/>
                <Route path="/decrement" element={<HomeTask6/>}/>
            </Routes>
        </main>
    )
}