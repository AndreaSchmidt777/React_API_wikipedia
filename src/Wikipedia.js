import React, { Component } from 'react';
import Panel from './Panel'

class Wikipedia extends Component {

    constructor(props){
    super(props);

        this.state = {
            searchText: ""
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
    onTextChange(event) {
        this.setState(
            {
                searchText: event.target.value
            }
        )

    }

    onSearchSubmit() {

    }

    render() {
        return(
<Panel title="Wikipedia">
    <input type="text"
    value={this.state.searchText}
    onChange={this.onTextChange} />
    <button onClick={this.onSearchSubmit}>Wikipedia durchsuchen</button>
</Panel>
        )
    }
}

export default Wikipedia