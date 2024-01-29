let i = 0
while(i<=3){
console.log("Hello")
i++
}

let y = 0
do{
    console.log("looped")
    y++
}while(y<3)

let func = function(j){
    if(j<3){
        console.log("in function")
        j++
        func(j)
    }
}
let j = 0
func(j)

let arr = [1,2,3,4,5,6]

for(let j = 0; j<arr.length; j++){
console.log(arr[j])
}
let x = 0
while(x<arr.length){
    console.log(x)

    if(arr[x]==3){
        break
    }
    x++
}
let numbers= [1,2,3,4,5,6]
for(let number of numbers){
    console.log(number)
}

 for(let number in arr){
    console.log(number)
 }
arr.forEach((number)=>{console.log(number)})

numbers.filterArr((number)=>{
    if(number>0){
    return number}
})


