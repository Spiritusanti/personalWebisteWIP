import React from 'react';
import './AnimatedCard.style.css';


const AnimatedCard = ({projectUrl}) => {
    return (
        <div className= "card">
            <div className="content">
                <h2 className="card-title">{projectUrl}</h2>
                <p className="copy">Lorem</p>
                <button className="btn">Visit</button>
            </div>
        </div>
    )
}

export default AnimatedCard;