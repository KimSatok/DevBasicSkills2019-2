var conjuction_result
var disjunction_result
var negation_result
var exclusive_result


function generate2(){
    if (document.getElementById("truthX").value == "AND") {
        AND()
    }
    else if (document.getElementById("truthX").value == "OR"){
        OR()
    }
    else if (document.getElementById("truthX").value == "NAND"){
        NAND()
    }
    else if (document.getElementById("truthX").value == "NOR"){
        NOR()
    }
    else if (document.getElementById("truthX").value == "XOR"){
        XOR ()
    }
    else if (document.getElementById("truthX").value == "XNOR"){
        XNOR ()
    }

}
// logical *
function AND() {
    let result = document.getElementById("truthtablebox")

    let table = ""
    table = "1 &ensp; &#8743; &ensp; 1 &ensp; = &ensp; " + (true & true) + ("<br>") + "1 &ensp; &#8743; &ensp; 0 &ensp;  = &ensp; " + (true & false) + ("<br>") + "0 &ensp; &#8743; &ensp; 1 &ensp;  = &ensp; " + (false & true) + ("<br>") + "0 &ensp; &#8743; &ensp; 0 &ensp; = &ensp; " + (false & false)

    result.innerHTML = table
}

//logical +
function OR() {
    let result = document.getElementById("truthtablebox")

    let table = ""
    table = "1 &ensp; &#8744; &ensp; 1 &ensp; = &ensp; " + (true | true) + ("<br>") + "1 &ensp; &#8744; &ensp; 0 &ensp;  = &ensp; " + (true + false) + ("<br>") + "0 &ensp; &#8744; &ensp; 1 &ensp;  = &ensp; " + (false + true) + ("<br>") + "0 &ensp; &#8744; &ensp; 0 &ensp; = &ensp; " + (false + false)

    result.innerHTML = table
}



// XOR
function XOR (){
    let result = document.getElementById("truthtablebox")

    let table = ""
    table = "1 &ensp; &oplus;  &ensp; 1 &ensp; = &ensp; " + (true ^ true) + ("<br>") + "1 &ensp; &oplus;  &ensp; 0 &ensp;  = &ensp; " + (true ^ false) + ("<br>") + "0 &ensp; &oplus;  &ensp; 1 &ensp;  = &ensp; " + (false ^ true) + ("<br>") + "0 &ensp; &oplus;  &ensp; 0 &ensp; = &ensp; " + (false ^ false)


    result.innerHTML = table
}

function XNOR () {
    let result = document.getElementById("truthtablebox")

    let table = ""
    table = " &#172;(1 &ensp; &oplus; &ensp; 1) &ensp; = &ensp; " + "1" + ("<br>") + "&#172;(1 &ensp; &oplus; &ensp; 0) &ensp;  = &ensp; " + (true * false) + ("<br>") + "&#172;(0 &ensp; &oplus; &ensp; 1) &ensp;  = &ensp; " + (false * true) + ("<br>") + "&#172;(0 &ensp; &oplus; &ensp; 0) &ensp; = &ensp; " + ("1")
    result.innerHTML = table
}

function NOR () {
    let result = document.getElementById("truthtablebox")

    let table = ""
    table = " &#172;(1 &ensp; &oplus; &ensp; 1) &ensp; = &ensp; " + "0" + ("<br>") + "&#172;(1 &ensp; &oplus; &ensp; 0) &ensp;  = &ensp; " + "0" + ("<br>") + "&#172;(0 &ensp; &oplus; &ensp; 1) &ensp;  = &ensp; " + "0" + ("<br>") + "&#172;(0 &ensp; &oplus; &ensp; 0) &ensp; = &ensp; " + ("1")
    result.innerHTML = table
}

function NAND () {
    let result = document.getElementById("truthtablebox")

    let table = ""
    table = " &#172;(1 &ensp; &#8744; &ensp; 1) &ensp; = &ensp; " + "0" + ("<br>") + "&#172;(1 &ensp; &#8744; &ensp; 0) &ensp;  = &ensp; " + (true + false) + ("<br>") + "&#172;(0 &ensp; &#8744; &ensp; 1) &ensp;  = &ensp; " + (false + true) + ("<br>") + "&#172;(0 &ensp; &#8744; &ensp; 0) &ensp; = &ensp; " + ("1")

    result.innerHTML = table
}