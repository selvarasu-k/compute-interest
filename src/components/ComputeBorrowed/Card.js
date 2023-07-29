import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-block">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card;