
import './App.css';
import Row from './component/Row';
import requests from './request';
import Banner from './component/Banner';
import Nav from './component/Nav';

function App() {
  return (
    <div>
        <Nav />
        <Banner   fetchUrl={requests.fetchNetflixOriginals} />
        
        <Row isposter={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
       
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
        <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
        <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
