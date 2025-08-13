let ages: any
let title

ages = 30
ages = false

title = 25
title = {
    hello: 'world'
}

// any type in arrays
let things: any[] = ['hello', true, 30, null]

things.push({id: 123})

// functions & any
function addTogether(value: any): any {
    return value + value
}

const resultOne = addTogether('hello')
const resultTwo = addTogether(3)