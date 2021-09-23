
import './styles/styles.css';
import logo from './media/physics.png';
import vrag from './media/vrag.jpg';
import nigrum from './media/nigrum.jpg';

function App() {
  return (
    <div className='App'>
    <header>
       <ul className='navbar'>
           <li><img src={logo} alt='Imagen' className='logo' /></li>
           <li>
               <button className='button mainButton'> + Nuevo Post</button>
           </li>
            <li>
            <div className='buscar'>
             <input placeholder='Buscar un disco'/>
             <i className='fas fa-search button iconoBusqueda'></i>
            </div>
            </li>
           <li><button className='button secondaryButton'>Login</button></li>
           <li><button className='button mainButton'>Registro</button></li>
       </ul>
    </header>
    <main>
        <section>
            <h1>Black Metal Albums</h1>
            <ul className='breedCardContainer'>
               <CardDiscosMetal nombreBanda='Vrag' imagen={vrag} />
               <CardDiscosMetal nombreBanda='Nigrum Tenebris' imagen={nigrum} />
               <CardDiscosMetal nombreBanda='Vrag' imagen={vrag} />
               <CardDiscosMetal nombreBanda='Nigrum Tenebris' imagen={nigrum} />
            </ul>
        </section>
        <section></section>
    </main>
    <footer>

    </footer>
    </div>
  );
}

function CardDiscosMetal({nombreBanda, imagen}) {
    return (
        <li className='breedCard backgroundGris'>
            <div className='contenedorImagen'>
                <img src={imagen} alt={nombreBanda}/>
            </div>  
            <span className='breedTitle'>{nombreBanda}</span>
        </li>
    ) 
}

export default App;
