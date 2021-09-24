import {Link} from "react-router-dom"

function CardDiscosMetal({nombreBanda, imagen}) {
    return (
        <li className='breedCard backgroundGris'>
            <Link to="/vrag">
            <div className='contenedorImagen'>
                <img src={imagen} alt={nombreBanda}/>
            </div> 
            </Link> 
            <span className='breedTitle'>{nombreBanda}</span>
        </li>
    ); 
}

export default CardDiscosMetal;