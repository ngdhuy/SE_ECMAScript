/**
 * * Final module contain main function
 */

'use strict'

const { sayHello, response } = require('./Demo14_module_sub')
const func = require('./Demo14_module_calculator')

sayHello()
let result = response("This is data")
console.log(result)

let a = 10
let b = 5

let c = func.sum(a, b)
console.log(c)