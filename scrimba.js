let washCar = document.getElementById("wash-car")
let mowLawn = document.getElementById("mow-lawn")
let pullWeeds = document.getElementById("pull-weeds")
let washPrice = document.getElementById("wash-price")
let mowPrice = document.getElementById("mow-price")
let pullPrice = document.getElementById("pull-price")
let washButton = document.getElementById("wash-button")
let mowButton = document.getElementById("mow-button")
let pullButton = document.getElementById("pull-button")
let amount = document.getElementById("amount")
let accept = document.getElementById("accept")
let invoice = document.getElementById("invoice")
let removeActivity = document.createElement("button")
// removeActivity.innerHTML = "Remove"
// document.body.appendChild(removeActivity)


let totalAmount = 0

let array = []


washButton.addEventListener("click", function(){
    if(array.includes("washCar") != true ){
        array += "washCar"
        washCar.innerHTML = "Wash Car"
        washPrice.innerHTML = "$10"
        totalAmount += 10 
        accept.innerHTML = "We accept cash, credit card, or PayPal"
        amount.innerHTML =  `$${totalAmount}`
    }

})

mowButton.addEventListener("click", function(){
    if(array.includes("mowLawn") != true ){
        array += "mowLawn"
        mowLawn.innerHTML = "Mow Lawn"
        mowPrice.innerHTML = "$20"
        accept.innerHTML = "We accept cash, credit card, or PayPal"
        totalAmount += 20 
        amount.innerHTML =  `$${totalAmount}`
}

})

pullButton.addEventListener("click", function(){
    if(array.includes("pullWeeds") != true ){
        array += "pullWeeds"
        pullWeeds.innerHTML = "Pull Weeds"
        pullPrice.innerHTML = "$30"
        accept.innerHTML = "We accept cash, credit card, or PayPal"
        totalAmount += 30 
        amount.innerHTML =  `$${totalAmount}`
    }

})


invoice.addEventListener("click", function(){

    washCar.innerHTML = ""
    washPrice.innerHTML = ""
    mowLawn.innerHTML = ""
    mowPrice.innerHTML = ""
    pullWeeds.innerHTML = ""
    pullPrice.innerHTML = ""
    totalAmount = 0
    amount.innerHTML = ""
    accept.innerHTML = ""
    array = []

})

// function remove(activity, price, cost){
//     activity.innerHTML = ""
//     price.innerHTML = ""
//     let myArray = array.indexOf ("activity")
//     if (myArray != -1) array.splice(myArray, 1)
//     totalAmount -= cost 
    

// }

