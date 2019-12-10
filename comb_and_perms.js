var permutation_with_repetition = 0
var permutation_without_repetition = 1
var combination_with_repetition = 0 
var combination_without_repetition = 0 
function permutations_repetition_allowed(chars, places) {
    if (isNaN(chars) || isNaN(places)) {
        permutation_with_repetition = "error"
    }
    else {
        permutation_with_repetition = chars ** places
    }
}

function permutations_repetition_not_allowed(chars, places) {
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
}


function combinations_repetition_allowed (chars, places){
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

}

function combinations_repetition_not_allowed(chars, places) {

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
}



permutations_repetition_not_allowed(8, 8)
console.log(permutation_without_repetition)