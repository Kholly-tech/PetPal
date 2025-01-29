export function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B'; // Billions
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'; // Millions
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k'; // Thousands
    } else {
        return num.toString(); // Less than 1000, return the number as is
    }
};


export function numberToWholeNo(num) {
    return num.toFixed(1);
}