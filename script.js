let op = ''
let number1 = 0
let number2 = 0
let porcents = false

function insertNumber(num){
    
    if(document.getElementById('number').innerHTML == 0){
        document.getElementById('number').innerHTML = ''
    }

    document.getElementById('number').innerHTML += num

}

function insertOperation(operation){
    
    op = operation
    number1 = document.getElementById('number').innerHTML
    document.getElementById('last-calc').innerHTML = `${number1}${op}`
    document.getElementById('number').innerHTML = 0

}

function porcent(){
    number1 = document.getElementById('number').innerHTML
    document.getElementById('last-calc').innerHTML = `${number1}%`
    document.getElementById('number').innerHTML = 0
    porcents = true
}

function c(){

    document.getElementById('number').innerHTML = 0
    document.getElementById('last-calc').innerHTML = 0
    op = ''
    number1 = ''
    number2 = ''

}

function ce(){

    document.getElementById('number').innerHTML = 0 

}

function result(){

    if(porcents === true){
        number2 = document.getElementById('number').innerHTML
        document.getElementById('number').innerHTML = eval((number1*number2)/100)
        
        porcents = false
        return
    }
    
    number2 = document.getElementById('number').innerHTML
    
    document.getElementById('last-calc').innerHTML = `${number1}${op}${number2}`
    document.getElementById('number').innerHTML = eval(`${number1}${op}${number2}`)    
}