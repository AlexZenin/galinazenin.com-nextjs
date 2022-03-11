// Eg.
// Input: 5
// Output: [0,1,2,3,4]

export default function createArrayWithIndicesOfLength(length) {
  let arr = Array.apply(null, Array(length)).map((_, idx) => idx);
  return arr;
}
