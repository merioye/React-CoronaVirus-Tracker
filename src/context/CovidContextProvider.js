import React, { useState, createContext, useEffect } from 'react';
import Header from '../components/header/Header';
import Cards from '../components/cards/Cards';
import Chart from '../components/chart/Chart';



const Context = createContext();

const CovidContextProvider = ()=>{
    const [responseData, setResponseData] = useState({confirmed:0,recovered:0,deaths:0});
    const [country, setCountry] = useState('global');

    const fetchData = async (url)=>{
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(response.status);
            }
            const data = await response.json();
            setResponseData(data);
        }catch(e){
            console.log(e);
        }
        
        
    }
    useEffect(()=>{
        if(country!=='global'){
            fetchData(`https://covid19.mathdro.id/api/countries/${country}`);
        }else{
            fetchData('https://covid19.mathdro.id/api');
        }
       
    },[country]);
    const handleCountry = (country)=>{
        setCountry(country);
    }

    return(
        <Context.Provider value={[responseData,handleCountry, country]}>
            <Header/>
            <Cards/>
            <Chart/>
        </Context.Provider>
    );
}

export default CovidContextProvider;
export {Context};

