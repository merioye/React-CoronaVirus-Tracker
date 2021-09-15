import React, { useContext } from 'react';
import Card from '../card/Card';
import './cards.css';
import { Context } from '../../context/CovidContextProvider';

const Cards = ()=>{
    const [responseData, ,] = useContext(Context);
    return(
        <div className='cards-container'>
            <Card color={'#65000b'} data={responseData.confirmed} name='CoronaVirus Cases'/>
            <Card color={'#90ee90'} data={responseData.recovered} name='Recovered'/>
            <Card color={'#dc143c'} data={responseData.deaths} name='Deaths'/>
        </div>
        
    );
}

export default Cards;