const getPropertySection = (flags: string, criteria: string) => {
    // get shop section of flag string
    const begin = flags.indexOf(criteria);
    let end = flags.length;
    for (let i = begin; i < flags.length; i++) {
        const charTest = flags.charAt(i);
        if(charTest === ' ') {
            end = i;
            break;
        }
    }

    const results = flags.slice(begin, end);
    return results;
}

export { getPropertySection}