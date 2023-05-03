import './beasts.css';

import { useState } from 'react'

function HornedBeasts(props) {

    const [votes, setVotes] = useState({text:"❤️ =", v:0});

    function handleClick(check) {
       
        let updatedValue = {};
        let value = votes.v

        if (check === +1) {
            updatedValue = {text:"❤️ =",v:value +1};
            setVotes(votes => ({
                ...votes,
                ...updatedValue
              }));
        } else if (value === 0) {
            updatedValue = {text:"💔 ="};
            setVotes(votes => ({
                ...votes,
                ...updatedValue
              }));   
        } else {
            updatedValue = {v:value -1};
            setVotes(votes => ({
                ...votes,
                ...updatedValue,
              }));        
        }
    }

      return (
        <div className="horned">
            <img src={props.image} alt="" className="hornImage"></img>
            <p>{props.text}</p>
            <p>{props.horns}</p>
            <div className="hornButton">
                <button onClick={() => handleClick(+1)}>increase the love!</button>
                <button onClick={handleClick}>lower the love?</button>
            </div>
            <h3>{votes.text} {votes.v}</h3>
        </div>
    );
}

export default HornedBeasts;

