import React, {Component, useState} from "react";

const Counter = (props) => {

    return(
        <>
           <h1 id='count'>{/** display count here */}</h1>
           <center>
                <button id='incCount' onClick={
                    /** function to chnage counter */
                    /** when this button is clicked counter should be increased */
                    /** start counter form zero */
                }>Increment Count</button>
           </center>
        </>
    )
}



export default Counter;
