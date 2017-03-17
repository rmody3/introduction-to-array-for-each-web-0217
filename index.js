var animals = ["dog", "fish", "cat"]

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

doToElementsInArray(animals, changeCompletely)
console.log(animals)
