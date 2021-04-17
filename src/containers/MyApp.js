import React, { useState, useEffect } from 'react';
import MyCardList from '../components/MyCardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './MyCss.css';

function App() {

    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users=>this.setState({robots : users}));
    // }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> {setRobots(users)});
        console.log(count);
    }, [count]) // 카운트가 바뀔때만 실행

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ? 
    
    <h1>Loading</h1> : 
    (
        <div className='outerBox'>
        <span>로봇 친구들</span>
        <button onClick={()=>setCount(count+1)}>클릭!</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
                <MyCardList robots={filteredRobots}/>
            </ErrorBoundary>

        </Scroll>
        </div>
    );

    
}

export default App;