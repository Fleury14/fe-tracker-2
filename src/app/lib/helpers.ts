function getIndices(criteria:string, string:string):number[]  {
    const len = criteria.length;
    if (len === 0) {
        return [];
    }
    let startIndex = 0;
    let index = 0;
    const result:number[] = [];
    while ((index = string.indexOf(criteria, startIndex)) > -1) {
        result.push(index);
        startIndex = index + len;
    }
    return result;
}

export { getIndices }