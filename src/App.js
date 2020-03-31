import React from 'react';
import Wikipedia from './Wikipedia'
import './App.css';

import {HashRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Route path="/Wikipedia" component={Wikipedia} />
        
        </div>
      </HashRouter>
        
        

  
     
    </div>
  );
}

export default App;
