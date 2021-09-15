import React, { useState, useContext } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './chart.css';
import { Context } from '../../context/CovidContextProvider';

const Chart = ()=>{
    const [isBar, setIsBar] = useState(true);
    const [responseData, ,country] = useContext(Context);

    const data = {
        labels:['Infected', 'Recovered', 'Deaths'],
        datasets: [{
            data: [responseData.confirmed.value,responseData.recovered.value,responseData.deaths.value],
            label: 'Current state',
            backgroundColor: ['#65000b','#90ee90','#dc143c']
        }]
    }
    const options = {
        plugins:{
            title:{
                display: true,
                text: 'Current Situation in '+country
            },
            legend:{
                display: false,
            }
        }
    }

    const handleBarChart = ()=>{
        setIsBar(true);
    }
    const handleLineChart = ()=>{
        setIsBar(false);
    }
    return(
        <>
            <div className='chart-container'>
                {isBar?<Bar data={data} options={options}/>:<Line data={data} options={options}/>}
                
            </div>
            <div className='chart-types'>
                <button onClick={handleBarChart} className='bar-link chart-link'>Bar Chart</button>
                <button onClick={handleLineChart} className='line-link chart-link'>Line Chart</button>
            </div>
        </>
    );
}

export default Chart;