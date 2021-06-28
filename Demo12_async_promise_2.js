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

const p_3 = Promise.resolve(100)
const p_4 = Promise.reject(true)
const p_5 = Promise.reject('Error')

const p_6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P_6 is resolved")
    }, 1000)
})

Promise.all([p_3, p_5, p_6])
.then(data => {
    console.log('P_3, P_5, P_6', data)
})
.catch(error => {
    console.log('P_3, P_5, P_6', error)
})


Promise.all([p_3, p_4, p_5, p_6])
.then(data => {
    console.log('P_3, P_4, P_5, P_6', data)
})
.catch(error => {
    console.log('P_3, P_4, P_5, P_6', error)
})

Promise.race([p_3, p_5, p_6])
.then(data => {
    console.log('RACE: P_3, P_5, P_6', data)
})
.catch(error => {
    console.log('RACE: P_3, P_5, P_6', error)
})


Promise.race([p_3, p_4, p_5, p_6])
.then(data => {
    console.log('RACE: P_3, P_4, P_5, P_6', data)
})
.catch(error => {
    console.log('RACE: P_3, P_4, P_5, P_6', error)
})

Promise.allSettled([p_3, p_5, p_6])
.then(data => {
    console.log('ALL_SETTLED: P_3, P_5, P_6', data)
})
.catch(error => {
    console.log('ALL_SETTLED: P_3, P_5, P_6', error)
})


Promise.allSettled([p_3, p_4, p_5, p_6])
.then(data => {
    console.log('ALL_SETTLED: P_3, P_4, P_5, P_6', data)
})
.catch(error => {
    console.log('AALL_SETTLED: P_3, P_4, P_5, P_6', error)
})