import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/CovidContextProvider';

const DropDownCountriesList = ()=>{
    const [countries, setCountries] = useState([]);
    const [,handleCountry,] = useContext(Context);
    const fetchCountries = async ()=>{
        try{
            const response = await fetch("https://covid19.mathdro.id/api/countries");
            if(!response.ok){
                throw new Error(response.status);
            }
            const data = await response.json();
            setCountries(data.countries);
        }catch(e){
            console.log(e);
        }
        
    }
    useEffect(()=>{
        fetchCountries();
    },[]);
    if(countries.length>0){
        return(
            <>
            <select name="country" className='drop-down' onChange={(e)=>(handleCountry(e.target.value.toLowerCase()))}>
                <option value='Global'>Global</option>
                {
                    countries.map((item, ind)=>{
                        return(
                            <option value={item.name} key={ind}>{item.name}</option>
                        )
                    })
    
                }
            </select>
        </>
        )
    }else{
        return(
            <select name="country" className='drop-down'>
                <option value='Global'>Global</option>
            </select>
        )
    }
}

export default DropDownCountriesList;