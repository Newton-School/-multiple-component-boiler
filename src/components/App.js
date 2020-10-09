import React, {Component, useState} from "react";
import '../styles/App.css';
import Counter from './Counter';

const App = () => {

    return(
        <>
            <h1 id='heading'>Counter</h1>
            <Counter count={
                /** use this prop to display counter */
            } handleCountChange={
                /** use this prop to change counter */
            } />
        </>
    )
}


export default App;
