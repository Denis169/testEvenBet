import React from "react";
import { Logo } from "../logo/logo";
import { Spinner } from "../spinner/spinner";

import './styles.less'
import { Player } from "../player/player";
import { Loading } from "../loading/loading";
import { TournamentItem } from "../tournamentItem/tournamentItem";

function App() {
  return (
    <div className="app">
      <Logo />
      <Spinner />
      <Player />
      <Loading />
      <TournamentItem />
    </div>
  );
}

export default App;
