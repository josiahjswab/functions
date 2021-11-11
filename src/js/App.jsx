import React, { Component, useState } from 'react';
import SortAndCompare from './SortAndCompareList';
import AuthorAdaptiveCard from './AuthorAdaptiveCard';
import './styles.css';

export default function App() {
    const [showModal, setShowModal] = useState(true);

    return (
        <div>
            {showModal ? 
            <div id="iceout">
                <div id='modal' >
                    <h1>📝🔥✌️</h1>
                    <p>This was made to compare lists from the watch table when debugging in Visual Studios. <br/>It is using the quotation marks around values to split the string into an array. <br/>If you manually add any values please make sure to surround it with (") until I make it so it can handle multiple ways of entry.</p>
                    <button onClick={() => setShowModal(!showModal)}>X</button>
                </div>
            </div>
            :
            null
            }
            
            {/* <p>It took 2 hours to get the results of my first comparision of two lists of 30 values. In 5 more minutes I compared about 800 more list items. Doing that manually would be very hard to keep track off.</p> */}
            <SortAndCompare showModal={showModal}/>
            <AuthorAdaptiveCard/>
        </div>
    )
}
