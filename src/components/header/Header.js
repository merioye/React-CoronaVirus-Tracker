// import React, { useContext } from 'react';
import React from 'react';
import './header.css';
import DropDownCountriesList from './DropDownCountriesList';
// import { Context } from '../../context/CovidContextProvider';

const Header = ()=>{
    // const responseData = useContext(Context);
    return(
        <header>
            <div className='logo-container'>
                <img src='images/covid.png' alt='' />
                <h1>Tracker</h1>
            </div>
            <div className='search-list-container'>
                <DropDownCountriesList/>
            </div>
        </header>
    );
}

export default Header;