import React, { useState, useEffect } from 'react';
import { utilityForEachLi, formatListIntoArray } from '../common';
import './sortAndCompare.css';

function SortAndCompare(props) {
    const [_listA, setListA] = useState(`
    "A1000"
    " Batman"
    " CCEMerge"
    " DASVID"
    " Hulk"
    " Iron Man"
    " LN01"
    " LN02"
    " MergeToPH"
    `);
    const [_listB, setListB] = useState(`
    "MergeToPH"
    "LN01"
    "LN02"
    "Batman"
    "Hulk"
    "Iron Man"
    "Spiderman"
    "Superman"
    "VID44"
    "A100"
    `);
    const [dbIsMissing, setDbIsMissing] = useState([]);
    const [testIsMissing, setTestIsMissing] = useState([]);
    const [countAB, setCountAB] = useState([0, 0]);
    const [resultA, setResultA] = useState("");
    const [resultB, setResultB] = useState("");
    const { showModal } = props;

    function thisFoo() {
        setDbIsMissing([]);
        setTestIsMissing([]);
        let listA = formatListIntoArray(_listA);
        let listB = formatListIntoArray(_listB);

        setCountAB((countAB) => [listA.length, countAB[1]]);
        listA.map((item, index) => {
            if (!listB.includes(item)) {
                setDbIsMissing((dbIsMissing) => [...dbIsMissing, item]);
            }
        });
        
        setCountAB((countAB) => [countAB[0], listB.length]);
        listB.map((item, index) => {
            if (!listA.includes(item)) {
                setTestIsMissing((testIsMissing) => [...testIsMissing, item]);
            }
        });

    }
    
    useEffect(() => {
        if (!showModal) {
            setResultA(`List A: ${dbIsMissing.length} out of ${countAB[0]} are not in the other list.`);
            setResultB(`List B: ${testIsMissing.length} out of ${countAB[1]} are not in the other list.`);
        }
    }, [dbIsMissing]);

    return (
        <div id="container_sort_compare">
            <div className='flex-column'>
                <textarea rows="20" type="textbox" value={_listA} onChange={(e) => setListA(e.target.value)} placeholder="List A..." />
                <h2>{resultA}</h2>
                <ol>
                    {dbIsMissing.length > 0 ? dbIsMissing.map((item) => (
                        <li>{item}</li>
                    )): null}
                </ol>
            </div>
            <button onClick={thisFoo} >Execute</button>
            <div className='flex-column'>
                <textarea rows="20" type="textbox" value={_listB} onChange={(e) => setListB(e.target.value)} placeholder="List B..." />
                <h2>{resultB}</h2>
                <ol>
                    {testIsMissing.length > 0 ? testIsMissing.map((item, index) => (
                        <li key={item + index} >{item}</li>
                    )): null}
                </ol>
            </div>
        </div>
    );
}

export default SortAndCompare;
