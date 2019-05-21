import React from 'react';
import './index.css';
//import {Link} from 'react-router-dom';

const CardList = (props) => {
    return (

            <div className="card text-white bg-dark mb-3 card-width">
                <div className="card-header">{props.data.userId}</div>
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <button className="btn btn-outline-primary btn-sm" to="/todo"
                           onClick={()=>props.handleTodoDetail(props.data)}>Read more</button>
                </div>
            </div>
    )
}

export default CardList;