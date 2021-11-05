import React, { Component } from 'react';
import SortAndCompare from './SortAndCompareList/SortAndCompare';
import './styles.css';

export default function App() {
    return (
        <div>
            <p>This was made to compare lists from the watch table when debugging in Visual Studios. It is using the quotation marks around values to split the string into an array. If you manually add any values please make sure to surround it with (") until I make it so it can handle multiple ways of entry.</p>
            <p>It took 2 hours to get the results of my first comparision of two lists of 30 values. In 5 more minutes I compared about 800 more list items. Doing that manually would be very hard to keep track off.</p>
            <SortAndCompare/>
        </div>
    )
}
