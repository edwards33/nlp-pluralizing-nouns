var natural = require('natural')
var first = 'crisis'
var second = 'radii'

var inflector = new natural.NounInflector()

console.log(inflector.pluralize(first))
console.log(inflector.singularize(second))

//count numbers:

var count = natural.CountInflector

new Array(1,2,3,4,5,6,7,8,9,10,11).forEach(num => console.log(count.nth(num)))
