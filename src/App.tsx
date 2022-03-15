import React, {useEffect} from 'react';
import './App.css';
import Game from "./containers/Game/Game";

function App() {
    useEffect(() => {
        document.title = 'Ghoul Memory'
    }, [])
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
