import React, { Component } from 'react';
import MyCardList from './MyCardList';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
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
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else{
            return (
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
}

export default App;