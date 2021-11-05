export const utilityForEachLi = (arr, ul, listLabel) => {
    arr.forEach((item, index) => {
        let textNode = document.createElement("li");
        if ( index == 0 ) {
            let ulLabel = document.createElement("li");
            ulLabel.innerText = listLabel;
            ul.appendChild(ulLabel);
        }
        textNode.innerText = item;
        ul.appendChild(textNode);
    })
}

export const formatListIntoArray = (str) => {
    let result = [];
    let stringArrayUntrimmed = str.split("\"")
    
    
    stringArrayUntrimmed.forEach( (item, index) => {
        if (item.trim() != "") {
            result.push(item.trim())
        }
    });
    result.sort((a,b) => {
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0
    })
    // utilityForEachCLOG(result);
    return result
}
