/**
 * * define BUS function in sub-module
 */

'use strict'

function sayHello() {
    console.log("Hello world!!!")
}

exports.sayHello = sayHello

exports.response = (message) => {
    return "Response is " + message
}