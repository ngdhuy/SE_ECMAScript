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