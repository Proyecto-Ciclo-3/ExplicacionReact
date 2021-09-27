import CardDiscosMetal from 'components/CardDiscosMetal';
import vrag from 'media/vrag.jpg';
import nigrum from 'media/nigrum.jpg';
import aorlhac from 'media/aorlhac.jpg';
import fustilarian from 'media/fustilarian.jpg';

function Index() {
    return (
    <section>
        <h1>Black Metal Albums</h1>
        <ul className='breedCardContainer'>
            <CardDiscosMetal nombreBanda='Vrag' imagen={vrag} />
            <CardDiscosMetal nombreBanda='Nigrum Tenebris' imagen={nigrum} />
            <CardDiscosMetal nombreBanda='Aorlhac' imagen={aorlhac} />
            <CardDiscosMetal nombreBanda='Fustilarian' imagen={fustilarian} />
        </ul>
    </section>
    );
}

export default Index;