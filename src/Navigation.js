import React, { Component } from 'react';
import Panel from './Panel'
import {Link} from 'react-router-dom';

class Navigation extends Component {

    render()
    {
        return (
           <ul>
               <li>
               <Link to="Wikipedia">Wikipedia</Link>
               </li>
               <li>
               <Link to="Wikipedia-Results">Wikipedia Results</Link>  
               </li>
           </ul>
        )
    }
}

export default Navigation;