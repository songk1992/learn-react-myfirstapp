import React, { Component } from 'react';
import MyCardList from './MyCardList';
import SearchBox from './SearchBox.js';
import { robots } from './robots';
import './MyCss.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='outerBox'>
                <span>로봇 친구들</span>
                <SearchBox searchChange={this.onSearchChange}/>
                <MyCardList robots={filteredRobots}/>
            </div>
    
        );
    }
}

export default App;