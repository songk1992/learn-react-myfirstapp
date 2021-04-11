import React, { Component } from 'react';
import MyCardList from '../components/MyCardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './MyCss.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=>this.setState({robots : users}));

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ? 
        
        <h1>Loading</h1> : 
        (
            <div className='outerBox'>
            <span>로봇 친구들</span>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <MyCardList robots={filteredRobots}/>
            </Scroll>
            </div>
        );

    }
}

export default App;