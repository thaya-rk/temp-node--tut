const _=require('lodash')

const items1=_.chunk(['a','b','c','d','e'],3)
const items=[1,[2,[3,[4]]]]
const nitems=_.flattenDeep(items)
console.log(nitems)
console.log(items1)