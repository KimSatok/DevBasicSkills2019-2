var conjuction_result
var disjunction_result
var negation_result
var exclusive_result
// logical *
function conjuction() {
    let x = document.getElementById("ConX").value
    let y = document.getElementById("ConY").value
    let result = document.getElementById("ConR")

    if (x == "t" || x == "T" || x== "true" || x=="True" || x == "1") {
        x = true
    }
    else if (x == "f" || x == "F" || x == "0" || x == "False" || x=="false") {
        x = false
    }
    if (y == "t" || y == "T" || y== "true" || y=="True" || y == "1") {
        y = true
    }
    else if (y == "f" || y == "F" || y == "0" || y== "false" || y=="False") {
        y = false
    }

    
    if (x * y == true){
        conjuction_result = " true"
    }
    else if (x * y == false){
        conjuction_result = " false"
    }
    
    result.innerHTML = conjuction_result
}

//logical +
function disjunction() {
    let x = document.getElementById("DisX").value
    let y = document.getElementById("DisY").value
    let result = document.getElementById("DisR")

    if (x == "t" || x == "T" || x== "true" || x=="True" || x == "1") {
        x = true
    }
    else if (x == "f" || x == "F" || x == "0" || x == "False" || x=="false") {
        x = false
    }
    if (y == "t" || y == "T" || y== "true" || y=="True" || y == "1") {
        y = true
    }
    else if (y == "f" || y == "F" || y == "0" || y== "false" || y=="False") {
        y = false
    }
    let a = x + y

    if (a == true || a == 2){
        disjunction_result = " true"
    }
    else if (a == false){
        disjunction_result = " false"
    }
    
    result.innerHTML = disjunction_result
}



// XOR
function exclusive (){
    let x = document.getElementById("ExX").value
    let y = document.getElementById("ExY").value
    let result = document.getElementById("ExR")
    if (x == "t" || x == "T" || x== "true" || x=="True" || x == "1") {
        x = true
    }
    else if (x == "f" || x == "F" || x == "0" || x == "False" || x=="false") {
        x = false
    }
    if (y == "t" || y == "T" || y== "true" || y=="True" || y == "1") {
        y = true
    }
    else if (y == "f" || y == "F" || y == "0" || y== "false" || y=="False") {
        y = false
    }

   
        if ((!x * y) + (x * !y) == true){
            exclusive_result = " true"
        }
        else if ((!x * y) + (x * !y) == false){
            exclusive_result = " false"
        }
    
    result.innerHTML = exclusive_result
}


exclusive("t", "T") 
console.log(exclusive_result)