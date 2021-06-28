/**
 * * Resolve call-back hell problem
 * * ES using PROMISE - Static methods of PROMISE
 */

'use strict'

console.clear()

//? Static methods
//! - Promise.resolve(value): return promise resolved (finish) with value
//! - Promise.reject(reason): return promise reject (error) with value of error
//! - Promise.all(iterable of multiple promises):
//      + Input array of promises or non-promises objects (number, boolean, etc...)
//      + Return new promise object. 
//      + Wait all of promises objects in array must be completed/resolved (finish) by order or promises in array
//      + If we have one of promises to be rejected, this promise (rejected) will throw error, but others is continue
//      + So, these promises are executed parallel
//! - Promise.race(iterable of multiple promises):
//      + Input array of promises or non-promises objects (number, boolean, etc...)
//      + Return new promise object. 
//      + Wait all of promises objects in array must be completed. Return of promise which is completed first will return the result (Resolved/Rejected)
//! - Promise.allSettled(iterable of multiple promises):
//      + Input array of promises or non-promises objects (number, boolean, etc...)
//      + Return new promise object. 
//      + Wait all of promises objects in array must be completed. Return array of result of all of promises
//! - Promise.any(iterable of multiple promises): experimental (beta)

//? Catch error and callback error of THEN
const resolvePromise = new Promise((resolve, reject) => {
    resolve('Promise is resolved')
})

const rejectPromise = new Promise((resolve, reject) => {
    reject('Promise is rejected')
})

rejectPromise
.then(() => {
    throw new Error('Oh no no ERROR')
}, error => {
    console.log('rejectPromise: ', error)
})

// resolvePromise
// .then(() => {
//     throw new Error('Oh no no ERROR')
// }, error => {
//     console.log('resolvePromise: ', error)
// })

resolvePromise
.then(() => {
    throw new Error('Oh no no ERROR')
})
.catch(error => {
    console.log('resolvePromise: ', error)
})