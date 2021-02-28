import {useSelector} from "react-redux";

import Playground from "./containers/playground";
import StartMenu from "./containers/start-menu";

import './App.scss';
//import {getTopTenPlayersLeaderboard, postPLayerToLeaderboard, checkPlayerExist, updateExistedPlayer} from "./db/db";

function App() {
    const {gameMode, gameStatus} = useSelector(state => state)

    //postPLayerToLeaderboard()
    //getTopTenPlayersLeaderboard()
    //checkPlayerExist('Jimmy Handrix', 'hard')
    //updateExistedPlayer()

    return (
        <div className="App">
            <header className='app-header'>
                <h1>b<span>OO</span>mberman<span className='mode'>[{gameMode}]</span></h1>
            </header>
            {
                gameStatus === 'preparing' ? <StartMenu/> : <Playground/>
            }
        </div>
    );
}

export default App;
