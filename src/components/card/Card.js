import React from 'react';
import './card.css';
import CountUp from 'react-countup';


const Card = ({color,data,name})=>{
    let date = new Date().toString().slice(0,15);
    return(
        <div className='card' style={{borderTop:`8px solid ${color}`,borderBottom:`8px solid ${color}`}}>
            <h4>{name}</h4>
            <h1 style={{color:color}}>
                <CountUp
                    start={0}
                    end={data.value}
                    duration={3}
                /> 
            </h1>
            <p>{ date }</p>
        </div>
    );
}

export default Card;