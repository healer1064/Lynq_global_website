import Header from '../../components/common/header.js';
import InfoBlock from '../../components/home/infoBlock.js';
import AccordianGroup from '../../components/home/accordianGroup.js';
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