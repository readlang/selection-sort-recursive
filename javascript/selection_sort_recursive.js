function selectionSortRecursive(arr) {
  // type your code here

  if (arr.length <= 1) return arr

  const minElement = Math.min(...arr)
  const index = arr.indexOf(minElement)

  arr.splice(index, 1)

  let newArray = selectionSortRecursive( arr )
  newArray.unshift(minElement)

  return newArray


  // return ( [minElement, ...selectionSortRecursive( arr.splice(index, 1) ) ] )

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
