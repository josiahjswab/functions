import React, { Component } from 'react';
import SortAndCompare from './SortAndCompareList/SortAndCompare';

export default function App() {
    return (
        <div>
            <p>This was made to compare lists from the watch table when debugging in Visual Studios. It is using the quotation marks around values to split the string into an array. If you manually add any values please make sure to surround it with (") until I make it so it can handle multiple ways of entry.</p>
            <SortAndCompare/>
        </div>
    )
}
