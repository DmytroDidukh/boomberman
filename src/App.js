import {useSelector} from "react-redux";

import Playground from "./containers/playground";
import StartMenu from "./containers/start-menu";
//import {postUsersLeaderboard, getTopTenUsersLeaderboard} from "./db/db";

import './App.scss';


function App() {
    const {gameMode, gameStatus} = useSelector(state => state)

    //postUsersLeaderboard({username: 'Bob Dylan', time: '123'})
    //getTopTenUsersLeaderboard()

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
