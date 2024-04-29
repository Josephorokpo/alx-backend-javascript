function cleanSet(set, startString) {
    // Filter the set to include only values starting with startString
    const filteredValues = [...set].filter(value => value.startsWith(startString));

    // Join the filtered values into a string separated by '-'
    return filteredValues.join('-');
}

export default cleanSet;
