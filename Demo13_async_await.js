/**
 * * Async ... Await ~ Promise
 */

'use strict'

console.clear()

//? Promise
const resolveAfter2MilliSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 2);
    })
}

// resolveAfter2Second()
//     .then(data => {
//         console.log(data)
//     })

async function asyncCall() {
    console.log("Calling")
    const result = await resolveAfter2MilliSecond()
    console.log(result)
    console.log("DONE")
    console.log("------------------------------")
}

console.log("STARTING")
asyncCall()
console.log("COMPLETED")

//? Async is similar Promise. Await must be waiting here
async function foo() {
    return 1
}

// function foo() {
//     return Promise.resolve(1)
// }

//? Compare Async with Promise

const p = new Promise((resolve, reject) => {
    resolve(1)
})

async function a() {
    return p
}

function basic() {
    return Promise.resolve(p)
}

console.log(p === basic())
console.log(p === a())

/**
 * async function foo() {
 *      await 1
 * }
 * 
 * function foo() {
 *      return Promise.resolve(1).then(() => undefine)
 * }
 */


async function f_sequence_1() {
    const result_1 = await new Promise(resolve => {
        console.log('result_1 is called')
        setTimeout(() => resolve('1'))
    })

    const result_2 = await new Promise(resolve => {
        console.log('result_2 is called')
        setTimeout(() => resolve('2'))
    })
    
}
f_sequence_1()

async function f_sequence_2() {
    const result_1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))

    const result_2 = new Promise((resolve,reject) => setTimeout(() => reject('2'), 500))

    const result = [await result_1, await result_2]
}

f_sequence_2()
    .then(data => console.log(data))
    .catch(error => {
        console.log("=> ERROR", error)
    })