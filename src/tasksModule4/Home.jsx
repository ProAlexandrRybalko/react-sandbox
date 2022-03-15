// import { Routes, Route, Link } from "react-router-dom";
// import Genre from "../tasksModule4/Genre";
// import "../index.css";

// export default function Home () {
//     const genres = ["Drama", "Comedy", "Adventure"];

//     return (
//         <div>
//             <h1>Genres</h1>
//             <div className="genres">
//                 {
//                     genres.map((val) => {
//                         return <Link key={val} to={"/" + val}>{ val }</Link>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

import { Routes, Route, Link } from "react-router-dom";
import Genre from "../tasksModule4/Genre";
import "../index.css";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home () {
    const [books, setBook] = useState([]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getAllBooks");
            setBook(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [books]);

    const OnClickDeleteButton = async (id) => {
        try {
            let response = await axios.delete("http://localhost:8000/deleteBook", {
                data: { id }
            });
            response = await axios.get("http://localhost:8000/getAllBooks");
            setBook(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            
            <div>
            <Link to={"/addNew"}>Add</Link>
            <h1>Books</h1>
            <div className="books">
                {
                    books.map((val) => {
                        return <div style={{"marginTop": "20px"}}>
                                <Link key={val} to={"/main/" + val._id}>{ val.title }</Link>
                                <button onClick={() => OnClickDeleteButton(val._id)}>delete</button>
                            </div>
                    })
                }
            </div>
        </div>
        </>
    )
}