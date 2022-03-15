import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Book () {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [desc, setDesc] = useState("");

    const fetchBook = async () => {
        try {
            const response = await axios.post("http://localhost:8000/main/:" + id, {id});
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setYear(response.data.year);
            setDesc(response.data.desc);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchBook();
    }, []);

    return ( 
        <div>
            <h1>Book</h1>
            <p>{title}</p>
            <p>{author}</p>
            <p>{year}</p>
            <p>{desc}</p>
        </div>
   )
}