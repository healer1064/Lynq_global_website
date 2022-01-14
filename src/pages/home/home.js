import React, { useState } from 'react'

import Header from '../../components/common/header';
import InfoBlock from '../../components/home/infoBlock';
import AccordianGroup from '../../components/home/accordianGroup';
import Follow from '../../components/home/follow'
import Following from '../../components/home/following'
import './home.css';

function Home() {
  const [isfollow, setFollow] = useState(false);
  const [showfollow, setShowFollow] = useState(false);
  const [showfollowing, setShowFollowing] = useState(false);

  return (
    <div className="Home">
        <Header isfollow={isfollow} setShowFollow={setShowFollow} setShowFollowing={setShowFollowing}/>
        <InfoBlock/>
        <AccordianGroup/>
        {showfollow && <Follow setFollow={setFollow} setShowFollow={setShowFollow}/>}
        {showfollowing && <Following setFollow={setFollow} setShowFollowing={setShowFollowing}/>}
    </div>
  );
}

export default Home;