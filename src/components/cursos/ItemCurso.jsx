import DefaultImage from "/NoImage.png"
import { Link } from "react-router-dom";

const ItemCurso = ({ id, title, type, year, poster }) => {
    
    let image = poster === "N/A" ? DefaultImage : poster;

    return ( 
        <Link  to={`/cursos/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <article>
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
                <div className="card-info">
                    <h4>{title}</h4>
                    <p className="row-info"><span>{type}</span><span>{year}</span></p>
                </div>
            </div>
            </article>
        </Link>
    );
}
 
export default ItemCurso;