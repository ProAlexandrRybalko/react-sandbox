import { useParams } from "react-router-dom"

export default function Year () {
    const {year} = useParams();
    return (
        <h2>Year {year}</h2>
    )
}

