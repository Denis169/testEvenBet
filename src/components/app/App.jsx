import React, { useEffect, useState } from "react";
import { Logo } from "../logo/logo";
import { Spinner } from "../spinner/spinner";
import { PlayerInfo } from "../playerInfo/playerInfo";
import { Loading } from "../loading/loading";
import { TournamentItem } from "../tournamentItem/tournamentItem";

import { tablesData } from "../data";
import './styles.less';

function App() {
  const [showBalance, setShowBalance] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  
  function getCurrentDimension(){
    return {
        width: window.innerWidth,
    }
  }

  useEffect(() => {
    const updateDimension = () => {
        setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <div className="app">
      <Logo />
      <Spinner screenSize={screenSize.width} />
      <PlayerInfo showBalance={showBalance} setShowBalance={setShowBalance} />
      <Loading screenSize={screenSize} />
      {tablesData.map((table, index) => (
        <TournamentItem
          pin={table.pin} 
          gameStatus={table.gameStatus}
          gameName={table.gameName}
          tournamentName={table.gameName}
          statusColor={table.statusColor}
          startDate={table.startDate}
          numberPlayers={table.numberPlayers}
          reward={table.reward}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
