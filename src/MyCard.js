import React from 'react';

const MyCard = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='사진' src={`https://robohash.org/${id}?200x200`} />
            <div><h2>{name}</h2></div>
            <p>{email}</p>
        </div>

    );
}

export default MyCard;