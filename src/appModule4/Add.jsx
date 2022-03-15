import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export default function Add () {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    const onSubmitAddBook = async () => {
        try {
            const response = await axios.post("http://localhost:8000/createBook", {title, author, year, desc});
            navigate("/main");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Add</h1>
            <form onSubmit={onSubmitAddBook}>
                <label htmlFor="title">title</label>
                <input id="title" name="title" onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="author">author</label>
                <input id="author" name="author" onChange={(e) => setAuthor(e.target.value)}/>
                <label htmlFor="year">year</label>
                <input id="year" name="year" onChange={(e) => setYear(e.target.value)}/>
                <label htmlFor="desc">desc</label>
                <input id="desc" name="desc" onChange={(e) => setDesc(e.target.value)}/>
                <input type={'submit'}/>
            </form>
            <Link to={"/main"}>back</Link>
        </div>
    )
}