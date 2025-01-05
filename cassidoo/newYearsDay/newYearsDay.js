function newYearsDay(year) {
    // Create a new Date object for January 1st of the given year
    const date = new Date(year, 0, 1); // Month is 0-indexed (0 = January)
    
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
}

// Examples
console.log(newYearsDay(2025)); // "Wednesday"
console.log(newYearsDay(2024)); // "Monday"
