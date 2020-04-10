import React, { Component } from 'react';
import { connect } from 'react-redux';

import Panel from "./Panel";
import { wikipediaSearch } from './../actions/index';

class WikipediaResults extends Component {

    componentDidMount() {
        this.props.onPerformSearch(this.props.match.params.search);
    }

    render() {
        if (this.props.response) {

        }
        return (
            <div>
            <div>WikipediaResults: {this.props.match.params.search}</div>
            {(this.props.response?(
<div>
    {this.props.response.body.query.search.map((item => {
        return (
            <Panel title={item.title}>
                <div>
                    {item.snippet}
                </div>
            </Panel>
        )
    }))}
    </div>
            ):null
            )}
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        response: state.wikipedia
    }
}

let mapDispatchToProps = {
    onPerformSearch: wikipediaSearch
}

let WikipediaResultsContainer = 
    connect(mapStateToProps, mapDispatchToProps)(WikipediaResults)

export default WikipediaResultsContainer;