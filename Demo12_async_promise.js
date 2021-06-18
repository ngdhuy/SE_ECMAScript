/**
 * * Resolve call-back hell problem
 * * ES using PROMISE
 */

'use strict'

console.clear()

//? Problem statement
const borrow_money = () => { 
    console.log('borrow money')
    return 100 
}

const hold_birthday_of_girlfriend = (money) => {
    console.log('hold birthday of girl friend')
    return ('OK with' + money)
}

const go_to_relax = () => { console.log('Go to BAR...')}

let money = borrow_money()
let girl_friend_birthday = hold_birthday_of_girlfriend(money)
let result_after_birthday = go_to_relax()

console.log('------------------------------------------')
//? Promise status
//  - Pending
//  - Fulfilled (resolve)
//  - Rejected
//? Promise properties
//  - constructor(callback)
//? Promise methods
//  - then(onFulfilled, onRejected)
//  - catch(onRejected)
//  - finally(onFinally)
console.log('--- Example 01 ---')

const p_1 = new Promise((resolve, reject) => {
    resolve('P_1 is resolved')
})

const p_2 = new Promise((resolve, reject) => {
    reject('P_2 is rejected')
})

p_1.then(success => {
    console.log('P_1 is success', success)
})

p_2.catch(error => {
    console.log('P_2 is rejected', error)
})

p_1.then(success => {
    console.log(success)
})
.catch(error => {
    console.log(error)
})
.finally(() => {
    console.log('=> Finally')
})

console.log('--- Example 02 ---')
const return_money = () => { 
    console.log('Return money') 
    return new Promise((resolve, reject) => {
        let isHappy = Math.random() >= 0.5
        if (isHappy) 
            return resolve(1000)
        else
            return reject('Do not happy, do not return')
    })
}

return_money()
.then(money => {
    setTimeout(()=>{
        console.log('Money is return', money)
    }, 500)
})
.then(() => {
    setTimeout(() => {
        console.log('Use money to hold party,', money)
    }, 300)
})
.then(() => {
    setTimeout(() => {
        console.log('Go to BAR')
    }, 100)
})
.catch(debt => {
    console.log('Money go out forever ^_^! because', debt)
})
.finally(() => {
    console.log('-- GO HOME --')
})

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

//? Chaining promises
const p_7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P_7 is resolved')
    }, 1000);
})

const p_8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P_8 is resolved')
    }, 2000)
})

const p_9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P_9 is resolved')
    }, 3000)
})

p_7.then(data => {
    console.log(data)
    return p_8
})
.then(data => {
    console.log(data)
    return p_9
})
.then(data => {
    console.log(data)
})

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

//? return or not return inside callback of then
const p_10 = new Promise((resolve, reject) => {
    resolve(100)
})

p_10.then(data1 => {
    console.log('P_10 is FIRST', data1)
    return data1 + 100
})
.then(data2 => {
    console.log('P_10 is SECOND', data2)
})
.then(data3 => {
    console.log('P_10 is THIRD', data3)         // data3 is undefine, because of inside function of data2 is not return value for data3
})
.catch(error => {
    console.log(error)
})
.finally(() => {
    console.log('DONE')
})

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