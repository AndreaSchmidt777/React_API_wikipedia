import React from 'react';
import Panel from './Panel'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Meine tolle Webseite</h1>
<Panel title="Überschrift" content="Inhalt" />
      </header>
    </div>
  );
}

export default App;
