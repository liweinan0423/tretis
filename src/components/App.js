import React from "react";
import GameBoard from '../containers/GameBoardContainer';
import GameConsole from '../containers/GameConsoleContainer';
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <GameBoard />
            <GameConsole />
        </div>
    );
};

export default App;
