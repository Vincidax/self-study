const a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());

let set1 = [];
let set2 = [];
let answer;

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

for (let i = 0; i <= 100; i++){
    if (i % 7 == c){
        set1.push(i);
    }    
}
for (let j= 0; j < set1.length; j++){
    if (set1[i] % 5 == b){
        set2.push(set1[i]);
    }
}
for (let k= 0; k < set2.length; k++){
    if (set2[k] %j 3 == a){
        answer = set2[k]
    }
}
console.log(`${answer}`);
