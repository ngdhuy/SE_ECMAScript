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

//? Micro-Task Queue (ES8)
setTimeout(() => {
    console.log("setTimeout is DONE")
}, 0);

const resolving = Promise.resolve()
const rejecting = Promise.reject()
const resolving_1 = Promise.resolve()
const rejecting_1 = Promise.reject() 

resolving
    .then(() => {
        console.log('Resolve then 1 OK')
    })
    .then(() => {
        console.log('Resolve then 2 OK')
    })
    .catch(() => {
        console.log('Catch 01')
    })

rejecting
    .then(() => {
        console.log('Reject then 1 OK')
    })
    .then(() => {
        console.log('Reject then 2 OK')
    })
    .catch(() => {
        console.log('Catch 02')
    })

resolving
    .then(() => {
        console.log('Resolving then 1 THEN')
    })
    .catch(() => {
        console.log('Resolving then 1 CATCH')
    })
    .finally(() => {
        console.log('Resolving then 1 FINALLY')
    })

rejecting
    .then(() => {
        console.log('Reject then 1 THEN')
    })
    .catch(() => {
        console.log('Reject then 1 CATCH')
    })
    .finally(() => {
        console.log('Reject then 1 FINALLY')
    })

resolving_1
    .then(() => {
        console.log('Resolving 1 then 1 THEN')
    })
    .catch(() => {
        console.log('Resolving 1 then 1 CATCH')
    })
    .finally(() => {
        console.log('Resolving 1 then 1 FINALLY')
    })

rejecting_1
    .then(() => {
        console.log('Reject 1 then 1 THEN')
    })
    .catch(() => {
        console.log('Reject 1 then 1 CATCH')
    })
    .finally(() => {
        console.log('Reject 1 then 1 FINALLY')
    })