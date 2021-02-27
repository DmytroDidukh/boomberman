import {useSelector} from "react-redux";
import dotenv from 'dotenv'

import Playground from "./containers/playground";
import StartMenu from "./containers/start-menu";
import {postUsersLeaderboard} from "./db/config";

import './App.scss';

dotenv.config()

function App() {
    const {gameMode, gameStatus} = useSelector(state => state)

    //postUsersLeaderboard({username: 'Bob Dylan', time: '23m 45s'})

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
