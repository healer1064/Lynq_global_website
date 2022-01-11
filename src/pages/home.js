import {Row, Col, Button} from 'react-materialize'
import Header from '../components/header.js';
import InfoBlock from '../components/infoBlock.js';
import AccordianGroup from '../components/accordianGroup.js';
import './home.css';

function Home() {
  return (
    <div className="Home">
        <Header/>
        <InfoBlock/>
        <AccordianGroup/>
    </div>
  );
}

export default Home;
