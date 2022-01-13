import Header from '../../components/common/header';
import InfoBlock from '../../components/home/infoBlock';
import AccordianGroup from '../../components/home/accordianGroup';
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