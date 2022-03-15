import { useParams } from "react-router-dom";
import Year from "../tasksModule4/Year";
import { Route, Routes, Link } from "react-router-dom";

function Genre (props) {
  const years = ['2010', '2011', '2012'];
  const {genre} = useParams();
  alert(genre);

  return (
    <div>
      <h1>{genre}</h1>
      <div className="genres">
      {
        years.map((val) => {
          return <Link key={val} to={val}>{ val }</Link>
        })
      }
      </div>
    </div>
  )
}

export default Genre;
