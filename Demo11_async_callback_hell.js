/**
 * * Async in ES6: Call-back hell
 * * use strict of ES6
 */
'use strict'

console.clear()

//? Call-back function
let value = 1
const f_1 = () => {
   console.log(value)
   setTimeout(() => {
       // call-back function (Nested function) is here
       value++
       console.log("Inside setTimeout():", value)
   },100)
   console.log("Outside setTimeout():", value)
}

f_1()

//? Problem of call-back function -> Call-back hell
const f_2 = () => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log("Run #05")
                }, 200)
                setTimeout(() => {
                    console.log("Run #06")
                },100)
                console.log("Run #04")
            }, 300)
            console.log("Run #03")
        }, 500)
        console.log("Run #02")
    },1000)
    console.log("Run #01")
}

f_2()