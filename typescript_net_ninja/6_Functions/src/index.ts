// functions

function addTwoNumbers(a:number, b: number): number {
    return a + b
}

const substractTwoNumbers = (a:number, b:number): number => {
    return a - b
}

console.log(addTwoNumbers(3, 9))

console.log(substractTwoNumbers(10, 7))

function addAllNumbers(items: number[]) {
    const total = items.reduce((a,c) => a + c, 0)
    console.log(total)
}

addAllNumbers([5,7,9,11,3,2,1])

// return type inference

function formatGreeting(name: string, greeting: string) {
    return `${greeting} ${name}!`

}

console.log(formatGreeting('mario', 'hello'))