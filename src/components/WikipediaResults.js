import React, { Component } from 'react';
import { connect } from 'react-redux';

import Panel from "./Panel";
import { wikipediaSearch } from './../actions/index';

class WikipediaResults extends Component {

    componentDidMount() {
        this.props.onPerformSearch("Berlin");
    }

    render() {
        return (
            <div>WikipediaResults: {this.props.match.params.search}</div>
        )
    }

}

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = {
    onPerformSearch: wikipediaSearch
}

let WikipediaResultsContainer = 
    connect(mapStateToProps, mapDispatchToProps)(WikipediaResults)

export default WikipediaResultsContainer;