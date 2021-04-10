import React from 'react';
import MyCard from './MyCard';
import './MyCss.css';

const MyCardList = ({ robots }) => {



    return(
        <div className="myCardList">
            {
                robots.map((user, i) => {
                    return (
                    <MyCard 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />
                    );
                })
            }
        </div>
    );
}

export default MyCardList;