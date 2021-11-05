import React from 'react';
import { utilityForEachLi, formatListIntoArray } from '../common';
// import { testList } from './testList.js'
// import { dbList } from './dbList.js'

function SortAndCompare() {
    const [_listA, set_listA] = useState("");
    const [_listB, set_listB] = useState("");

    let listA = formatListIntoArray(_listA);
    let listB = formatListIntoArray(_listB);

    let dbIsMissing =[];
    let testIsMissing =[];
    listA.map((item) => {
        if (!listB.includes(item)) {
            dbIsMissing.push(item);
        }
    });

    listB.map((item) => {
        if (!listA.includes(item)) {
            testIsMissing.push(item);
        }
    });;
    if (dbIsMissing.length > 0) {
        // utilityForEachCLOG(dbIsMissing);
        utilityForEachLi(dbIsMissing, ul1, `listA: ${dbIsMissing.length} out of ${listA.length} are not in the other list.`);
    }
    
    if (testIsMissing.length > 0) {
        // utilityForEachCLOG(testIsMissing);
        utilityForEachLi(testIsMissing, ul2, `listB: ${testIsMissing.length} out of ${listB.length} are not in the other list.`);
    
    }
    return (
        <div>
            <ul>list a
            </ul>
            <ul>list b
            </ul>
        </div>
    );
}

export default SortAndCompare;
