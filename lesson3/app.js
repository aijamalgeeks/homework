//классы операторов
//1)унарные - +, -,!
//2)бинарные - **, /, %
//3)тернарные -

var num = 2
// if (num > 10){
//     console.log('больше 10')
// }else {
//     console.log('меньше 10')
// }

console.log(num >10 ? "больше 10": "меньше 10")
// var age = prompt('age')
// console.log(age >= 18 && age <= 50 ? 'вы приняты' : 'отказано')

// var age2 = 70
// var str = age2 <18 ? 'ребенок' : (age2 >18 && age2 <60) ? 'рабочий' : 'пенсионер'
// console.log(str)

//7)symbol
//8)bigint
var bigint = 89n
console.log(typeof bigint)

//trythy and falsy - выражение
//falsy -> 0, -0, 0n, '', "", ``, null, underfined, NaN false
var el = '0'
console.log(el ? 'true' : 'false')

//массив-array
var array = [2, 'gwerty', null, undefined,true, {},[]]
console.log(array)
console.log(array[4])
console.log(array[2])
console.log(array.length - 1)
//методы array
var numbers = [12,12,34]
//1)push
numbers.push(3,6,6)
console.log(numbers)
//2)concat
var newArr = numbers.concat([0,0])
console.log(newArr)
console.log(numbers)
//3)unshift
numbers.unshift(3)
console.log(numbers)
//4)pop
var lastNum = numbers.pop()
console.log(lastNum)
//5)join
var joinNum = numbers.join()
console.log(joinNum)

//цикл for
// for(var i = 0; i <=100; i++){
//     console.log(i)
// }

var names = ['aidar', 'anna','john','jack','venera', 'ulan','begaiym']
var blacklist = ['jack','anna','john']
for (var i = 0; i < names.length; i++){
    if (blacklist.includes(names[i])){
        console.warn(`${names[i]} in blacklist`)
        continue

    }
    console.log(`Welcome,dear guest ${names[i]}`)
}
console.log("hello World ")









