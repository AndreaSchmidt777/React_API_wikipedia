import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Startseite</Link>
                </li>
                <li>
                    <Link to="/todo">TODO ({this.props.todoCount})</Link>
                </li>
                <li>
                    <Link to="/click">Klickzähler ({this.props.counter})</Link>
                </li>
                  <li>
                    <Link to="/wikipedia">Wikipedia</Link>
                </li>
            </ul>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        counter: state.counter,
        todoCount: state.todos.length
    }
}
let mapDispatchToProps = {}

let NavigationContainer = 
    connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;
