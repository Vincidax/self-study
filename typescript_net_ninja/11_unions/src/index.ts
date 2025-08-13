// union types

let someId: number | string

someId = 1
someId = '2'

let email: string | null = null

email = 'mario@netninja.dev'
email = null

type Id = number | string
let anotherId: Id

anotherId = 'dandkafasdf'
anotherId = 5

// type guard 

function swapIdType(id: Id){
    if (typeof id === 'string') {
        return parseInt(id)
    } else {
        return id.toString()
    }
}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')

console.log(idOne, idTwo)


// tagged interfaces

interface User {
    type: 'user'
    username: string
    email: string
    id: Id
}

interface Person {
    type: 'person'
    firstname: string
    age: number
    id: Id
}

function logDetails(value: User | Person): void {
    if(value.type === 'user'){
        console.log(value.email, value.username)
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age)
    }
}

logDetails({type: 'person',
    firstname: 'kigali',
    age: 23,
    id: 3})