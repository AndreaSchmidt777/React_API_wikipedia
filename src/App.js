import React from 'react';
import Wikipedia from './Wikipedia';
import WikipediaResults from './WikipediaResults';
import Navigation from './Navigation';
import './App.css';

import {HashRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
         <Navigation/> 

          <Route path="/Wikipedia" component={Wikipedia} />
          <Route path="/Wikipedia-Results/:search" component={WikipediaResults} />
        
        </div>
      </HashRouter>
        
        

  
     
    </div>
  );
}

export default App;
