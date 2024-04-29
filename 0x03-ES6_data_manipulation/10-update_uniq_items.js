function updateUniqueItems(groceryMap) {
    // Check if the input is a Map
    if (!(groceryMap instanceof Map)) {
        throw new Error('Cannot process');
    }

    // Iterate through the entries of the map
    for (const [item, quantity] of groceryMap.entries()) {
        // If the quantity is 1, update it to 100
        if (quantity === 1) {
            groceryMap.set(item, 100);
        }
    }

    return groceryMap;
}

export default updateUniqueItems;
