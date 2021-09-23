
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
                <li className='breedCard'>
                    <div className='contenedorImagen'>
                    <img src={vrag}
                    alt='Vrag - Harcom'/>
                    </div>  
                    <span className='breedTitle'>Vrag-Harcom(2021)</span>
                </li>
                <li className='breedCard'>
                    <div className='contenedorImagen'>
                    <img src={nigrum}
                    alt='Nigrum Tenebris - I am the serpent'/>
                    </div>
                    <span className='breedTitle'>Nigrum Tenebris-I am the serpent (2021)</span>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
