import React, { Component } from 'react';
import Panel from './Panel';


class WikipediaResults extends Component {

    render()
    {
        return (
            <div>
                WikipediaResults: {this.props.match.params.search}
            </div>
        )
    }
}

export default WikipediaResults;