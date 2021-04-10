import React, { Component } from 'react';
import './main.css';

const Hello = (greet) => {
    return (
        <div className="f1 tc">
            <h1>Hello World</h1>
            <p>{greet.greeting}</p>
        </div>
        );
}


export default Hello;