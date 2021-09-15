import React from 'react';
import CovidContextProvider from './context/CovidContextProvider';
import './App.css';

const App = ()=>{
    return(
        <>
            <div className='main-container'>
                <CovidContextProvider></CovidContextProvider>
            </div>
            
        </>
    );
}

export default App;