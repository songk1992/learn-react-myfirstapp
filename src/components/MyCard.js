import React from 'react';

const MyCard = ({ name, email, id }) => {
    return (
        <div className='myCard grow'>
            <img alt='사진' src={`https://robohash.org/${id}?200x200`} />
            <div><h2>{name}</h2></div>
            <p>{email}</p>
        </div>

    );
}

export default MyCard;