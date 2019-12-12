function show( ){
    if (document.getElementById("perms").checked == true) {
        document.getElementById("sampling").style.visibility = 'visible' 
    }
    else if (document.getElementById("combs").checked == true){
        document.getElementById("sampling").style.visibility = 'hidden'
    }
}


function calculate() {
    let permutations_button = document.getElementById("perms")
    let combinations_button = document.getElementById("combs")
    if ( permutations_button.checked == true){      
        if (document.getElementById("sampling").value == "Replacement") {
            permutations_repetition_allowed()
        }
        else if ( document.getElementById("sampling").value == "No Replacement" ) {
            permutations_repetition_not_allowed()
        }
    }
    else if (combinations_button.checked == true) {
        combinations_repetition_not_allowed()
}
}

function permutations_repetition_allowed() {
    var permutation_with_repetition = 0
    let chars = document.getElementById("input1").value
    let places = document.getElementById("input2").value
    let result = document.getElementById("answer")
    if (isNaN(chars) || isNaN(places)) {
        permutation_with_repetition = "error"
    }
    else {
        permutation_with_repetition = chars ** places
    }

    result.innerHTML = permutation_with_repetition
}

function permutations_repetition_not_allowed() {
    var permutation_without_repetition = 1
    let chars = document.getElementById("input1").value
    let places = document.getElementById("input2").value
    let result = document.getElementById("answer")

    let count = 0
    if (isNaN(chars) || isNaN(places)) {
        permutation_with_repetition = "error"
    }
    else {
        while (count < places) {
            permutation_without_repetition = permutation_without_repetition * (chars - count)
            count++
        }
    }
    result.innerHTML = permutation_without_repetition
}


function combinations_repetition_allowed (){
    var combination_with_repetition = 0 
    let chars = document.getElementById("input1").value
    let places = document.getElementById("input2").value
    let result = document.getElementById("answer")
    chars = parseInt(chars)
    places = parseInt(places)

    let positions = places + (chars - 1)
    let charsM = chars - 1
    let fact_positions = 1
    let fact_places = 1
    let fact_charsM = 1
    let count = 0
    if (isNaN(chars) || isNaN(places)) {
        combination_without_repetition = "error"
    }
    else {
        count = places
        while (count > 0){
            fact_places = fact_places * count
            count--
        }
        count = charsM
        while (count > 0){
            fact_charsM = fact_charsM * count
            count--
        }
        count = positions
        while (count > 0){
            fact_positions = fact_positions * count
            count--
        }
        combination_with_repetition = fact_positions / (fact_places * fact_charsM)

    }

    result.innerHTML = combination_with_repetition

}

function combinations_repetition_not_allowed() {
    
    var combination_without_repetition = 0 
    let chars = document.getElementById("input1").value
    let places = document.getElementById("input2").value
    let result = document.getElementById("answer")

    let fact_chars = 1 
    let fact_places = 1
    let chars_places = chars - places
    let fact_chars_places = 1
    let count 
    if (isNaN(chars) || isNaN(places)) {
        combination_without_repetition = "error"
    }
    else {
        count = chars
        while (count > 0){
            fact_chars = fact_chars * count
            count--
        }
        count = places
        while (count > 0){
            fact_places = fact_places * count
            count--
        }
        count = chars_places
        while (count > 0){
            fact_chars_places = fact_chars_places * count
            count --
        }
        combination_without_repetition = fact_chars / (fact_places * fact_chars_places)
    }
    result.innerHTML = combination_without_repetition
}


