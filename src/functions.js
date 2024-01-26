function greeting(name){
    if(name === "Anna"){
        console.log("Пішла геть")
        return
    }
    console.log(`привіт ${name}! `)
}

 let name1 = "Zheka"
greeting("Anna")
greeting("Жека")
greeting()

let age = 36

function canIsmoke(age){
    if(age < 18){
        return "Пішов геть"
    }
    if(age >= 65){
        return "пішов на пенсію"
    }
    return "куріть пане"
}


let smok = function(age){
    if(age < 18){
        return "Пішов геть"
    }
    if(age >= 65){
        return "пішов на пенсію"
    }
    return "куріть пане"
}

let smoking = (age) =>{
    if(age < 18){
        return "Пішов геть"
    }
    if(age >= 65){
        return "пішов на пенсію"
    }
    return "куріть пане"
}

 smoking = (age) =>{
    if(age <= 18){
        return "Пішов геть"
    }
    return "куріть пане"
}

console.log(smoking(17))
console.log(smoking(18))
console.log(smoking(19))

function operatorsCheck(name, age, department) {
    if (name == "Zheka" && age == 36 && department == "QA") {
        return console.log("Zheka is great QA engineer");
    }

    return console.log("It is wrong Zheka");
}

operatorsCheck(name1, age, "QA")
operatorsCheck("Zhekaqa36", 36, "QA")
operatorsCheck("Zheka", 0, "QAs")
operatorsCheck("Zhek", 36, "QA")
