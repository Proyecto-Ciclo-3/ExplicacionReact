function CardDiscosMetal({nombreBanda, imagen}) {
    return (
        <li className='breedCard backgroundGris'>
            <div className='contenedorImagen'>
                <img src={imagen} alt={nombreBanda}/>
            </div>  
            <span className='breedTitle'>{nombreBanda}</span>
        </li>
    ); 
}

export default CardDiscosMetal;