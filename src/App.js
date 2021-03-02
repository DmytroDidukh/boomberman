import {useSelector} from "react-redux";

import Playground from "./containers/playground";
import StartMenu from "./containers/start-menu";
import {GAME_MODE_DATA} from './config'

import './App.scss';

function App() {
    const {gameMode, gameStatus} = useSelector(state => state)

    return (
        <div className="App">
            <header className='app-header'>
                <h1>b<span>OO</span>mberman<span className='mode'>[{GAME_MODE_DATA[gameMode].name}]</span></h1>
            </header>
            {
                gameStatus === 'preparing' ? <StartMenu/> : <Playground/>
            }
        </div>
    );
}

export default App;
