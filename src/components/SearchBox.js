import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
        <input 
        className = ''
        type='search' 
        placeholder='로봇을 찾아봅시다' 
        onChange = {searchChange} />
        </div>

    );
}

export default SearchBox;