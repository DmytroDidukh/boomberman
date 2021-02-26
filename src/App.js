import Playground from "./containers/playground";
import StartMenu from "./containers/start-menu";

import './App.scss';
import {useSelector} from "react-redux";

function App() {
    const {gameMode, gameStatus, fieldSize} = useSelector(({gameMode, gameStatus, fieldSize}) => ({
        gameMode,
        gameStatus,
        fieldSize
    }))

    return (
        <div className="App">
            <header className='app-header'>
                <h1>b<span>OO</span>mberman</h1>
            </header>
            {
                gameStatus === 'preparing' ? <StartMenu/> : <Playground/>
            }
        </div>
    );
}

export default App;
