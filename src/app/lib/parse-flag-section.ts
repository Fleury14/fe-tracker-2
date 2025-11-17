const getPropertySection = (flags: string, criteria: string) => {
    
    let begin = flags.indexOf(criteria);
    if (flags.charAt(begin - 1) === "O") {
        // make sure the Objective subgroup titles (aka OB1, OC1) are not mistakenly being pulled.
        // this operated under the assumption that B and C will not appear a second time before its respective subsection
        begin = flags.indexOf(criteria, begin + 1)
    }
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