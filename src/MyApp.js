import React from 'react';
import MyCardList from './MyCardList';
import SearchBox from './SearchBox.js';
import { robots } from './robots';
import './MyCss.css';

const App = () => {
    return (
        <div className='outerBox'>
            <h1>로봇 친구들</h1>
            <SearchBox />
            <MyCardList robots={robots}/>
        </div>

    );
}

export default App;