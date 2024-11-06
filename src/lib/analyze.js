export default function analyzeArray(arr) {
  return {
    average: arr.reduce((total, item) => total + item, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
