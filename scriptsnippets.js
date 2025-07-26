const converter = toUnit => factor => offset => input => {
    const adjustedInput = input + (offset || 0);
    const convertedValue = adjustedInput * factor;
    return `${convertedValue.toFixed(2)} ${toUnit}`;
};
// Create specialized converters
const milesToKm = converter('km')(1.60936)(0);
console.log(milesToKm(10)); // "16.09 km"
