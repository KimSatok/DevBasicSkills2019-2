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
    else if (x == "f" || x == "F" || x == "0" || x == "False") {
        x = false
    }
    if (y == "t" || y == "T" || y== "true" || y=="True" || y == "1") {
        y = true
    }
    else if (y == "f" || y == "F" || y == "0") {
        y = false
    }

    
    if (x * y == true){
        conjuction_result = "true"
    }
    else if (x * y == false){
        conjuction_result = "false"
    }
    
    result.innerHTML = conjuction_result
}

//logical +
function disjunction (x, y) {
    if (x == "t" || x == "T" || x== "true" || x=="True") {
        x = true
    }
    else if (x == "f" || x == "F") {
        x = false
    }
    if (y == "t" || y == "T" || y== "true" || y=="True") {
        y = true
    }
    else if (y == "f" || y == "F") {
        y = false
    }
    if (isNaN(x) || isNaN(y)) {
        disjunction_result = "error"
    }
    else {
        disjunction_result = y + x
    }
}

//logical not
function negation (x) {
    if (x == "t" || x == "T" || x== "true" || x=="True") {
        x = true
    }
    else if (x == "f" || x == "F") {
        x = false
    }
    if (isNaN(x) ) {
        negation_result = "error"
    }
    else {
        negation_result = !x
    }

}

// XOR
function exclusive (x, y){
    if (x == "t" || x == "T" || x== "true" || x=="True") {
        x = true
    }
    else if (x == "f" || x == "F") {
        x = false
    }
    if (y == "t" || y == "T" || y== "true" || y=="True") {
        y = true
    }
    else if (y == "f" || y == "F") {
        y = false
    }
    if (isNaN(x) || isNaN(y)) {
        exclusive_result = "error"
    }
    else {
        exclusive_result = (!x * y) + (x * !y)
    }
}


exclusive("t", "T") 
console.log(exclusive_result)