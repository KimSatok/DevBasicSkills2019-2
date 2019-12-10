
var hexidecimal_from_decimal = ""



var decimal_from_binary = 0
var octal_from_binary = 0
var hexidecimal_from_binary = 0


var decimal_from_octal = 0
var binary_from_octal = 0
var hexidecimal_from_octal = 0


var decimal_from_hexidecimal = 0
var binary_from_hexidecimal = 0
var octal_from_hexidecimal = 0
//Please do not use decimal numbers bigger than 16 symbols, I guess
function convertDB() {
    var binary_from_decimal = ""
    let dec = document.getElementById("inputdecimal").value
    let result = document.getElementById("DBout")
    let power = 1;
    let power_of_two = 0;
    let biggest_number = 2;

    if (dec != 1 && dec != 0) {
        while (biggest_number <= dec / 2) {
            biggest_number = biggest_number * 2
            power++
        }

        while (power != -1) {
            power_of_two = 2 ** power
            if (dec - power_of_two > -1) {
                binary_from_decimal = binary_from_decimal + "1"
                dec = dec - power_of_two
            }
            else {
                binary_from_decimal = binary_from_decimal + "0"
            }
            power--

        }

    }
    else if (dec == 1) {
        binary_from_decimal = "1"

    }
    else if (dec == 0) {
        binary_from_decimal = "0"
    }
    else {
        binary_from_decimal = "error"
    }
    result.innerHTML = binary_from_decimal
}

function convertDO() {
    var octar =[]
    var octal_from_decimal = ""
    let dec2 = document.getElementById("inputdecimal").value
    let result = document.getElementById("DOout")
    for (let i = dec2; i > 0; i=parseInt(i/8)){
        octar.push(i % 8)
    }
    octar = octar.reverse()
    for(let l = 0 ; l < octar.length ; l++) {
        octal_from_decimal = octal_from_decimal + octar[l]

    }
    result.innerHTML = octal_from_decimal
    
}


function convertDH() {
    var hexar =[]
    var hexidecimal_from_decimal = ""
    let dec3 = document.getElementById("inputdecimal").value
    let result = document.getElementById("DHout")
    for (let i = dec3; i > 0; i=parseInt(i/16)){
        if ( i % 16 == 10) {
            hexar.push("A")
        }
        if ( i % 16 == 11) {
            hexar.push("B")
        }
        if ( i % 16 == 12) {
            hexar.push("C")
        }
        if ( i % 16 == 13) {
            hexar.push("D")
        }
        if ( i % 16 == 14) {
            hexar.push("E")
        }
        if ( i % 16 == 15) {
            hexar.push("F")
        }
        else if (i % 16 == 1 ||i % 16 == 0 ||i % 16 == 2 ||i % 16 == 3 ||i % 16 == 4 ||i % 16 == 5 ||i % 16 == 6 ||i % 16 == 7 ||i % 16 == 8 ||i % 16 == 9) {
        hexar.push(i % 16)
        }
    }
    hexar = hexar.reverse()
    for(let l = 0 ; l < hexar.length ; l++) {
        hexidecimal_from_decimal = hexidecimal_from_decimal + hexar[l]

    }
    result.innerHTML = hexidecimal_from_decimal
}






function convertBD(bin) {
    let count = 0
    let stringbin = bin.toString(10)
    let bin2 = [];
    while (count < stringbin.length) {
        bin2.push(stringbin.substring(count, count + 1))
        count++
    }
    let power = (bin2.length) - 1;
    for (let i of bin2) {
        if (i == 1) {
            decimal_from_binary = decimal_from_binary + 2 ** power
            power--
        }
        else if (i == 0) {
            power--
        }

        for (let l = 0; l < stringbin.length; l++) {
            if (stringbin[l] != 0 && stringbin[l] != 1) {
                decimal_from_binary = "error"
            }
        }
    }
}

function convertBO (bin) {
    let count = 0
    let stringbin = bin.toString(10)
    let bin2 = [];
    while (count < stringbin.length) {
        bin2.push(stringbin.substring(count, count + 1))
        count++
    }
    let power = (bin2.length) - 1;
    for (let i of bin2) {
        if (i == 1) {
            octal_from_binary = octal_from_binary + 2 ** power
            power--
        }
        else if (i == 0) {
            power--
        }

        for (let l = 0; l < stringbin.length; l++) {
            if (stringbin[l] != 0 && stringbin[l] != 1) {
                octal_from_binary = "error"
            }
        }
    }
    octal_from_binary= octal_from_binary.toString(8);
}

function convertBH (bin){
    let count = 0
    let stringbin = bin.toString(10)
    let bin2 = [];
    while (count < stringbin.length) {
        bin2.push(stringbin.substring(count, count + 1))
        count++
    }
    let power = (bin2.length) - 1;
    for (let i of bin2) {
        if (i == 1) {
            hexidecimal_from_binary = hexidecimal_from_binary + 2 ** power
            power--
        }
        else if (i == 0) {
            power--
        }

        for (let l = 0; l < stringbin.length; l++) {
            if (stringbin[l] != 0 && stringbin[l] != 1) {
                hexidecimal_from_binary = "error"
            }
        }
    }
    hexidecimal_from_binary = hexidecimal_from_binary.toString(16);
}








function convertOD(oct) {
    let stringoct = oct.toString(10)
    let count = 0;
    let oct2 = []
    while (count < stringoct.length) {
        oct2.push(stringoct.substring(count, count + 1))
        count++
    }

    let power = oct2.length - 1;
    for (let i of oct2 ){
        decimal_from_octal = decimal_from_octal + i * 8 ** power
        power--
    }
    for (let l = 0; l < stringoct.length; l++) {
        if (stringoct[l] == 8 ||  stringoct[l] == 9 ) {
            decimal_from_octal = "error"
        }
    }

}

function convertOB (oct) {
    let stringoct = oct.toString(10)
    let count = 0;
    let oct2 = []
    while (count < stringoct.length) {
        oct2.push(stringoct.substring(count, count + 1))
        count++
    }

    let power = oct2.length - 1;
    for (let i of oct2 ){
        binary_from_octal = binary_from_octal + i * 8 ** power
        power--
    }
    for (let l = 0; l < stringoct.length; l++) {
        if (stringoct[l] == 8 ||  stringoct[l] == 9 ) {
            binary_from_octal = "error"
        }
    }

    power = 1;
    let power_of_two = 0;
    let biggest_number = 2;
    let dec = binary_from_octal
    binary_from_octal = ""
    if (dec != 1 && dec != 0) {
        while (biggest_number <= dec / 2) {
            biggest_number = biggest_number * 2
            power++
        }

        while (power != -1) {
            power_of_two = 2 ** power
            if (dec - power_of_two > -1) {
                binary_from_octal = binary_from_octal + "1"
                dec = dec - power_of_two
            }
            else {
                binary_from_octal = binary_from_octal + "0"
            }
            power--

        }

    }
    else if (dec == 1) {
        binary_from_octal = "1"

    }
    else if (dec == 0) {
        binary_from_octal = "0"
    }
    else {
        binary_from_octal = "error"
    }

}

function convertOH (oct) {
    let stringoct = oct.toString(10)
    let count = 0;
    let oct2 = []
    while (count < stringoct.length) {
        oct2.push(stringoct.substring(count, count + 1))
        count++
    }

    let power = oct2.length - 1;
    for (let i of oct2 ){
        hexidecimal_from_octal = hexidecimal_from_octal + i * 8 ** power
        power--
    }
    for (let l = 0; l < stringoct.length; l++) {
        if (stringoct[l] == 8 ||  stringoct[l] == 9 ) {
            hexidecimal_from_octal = "error"
        }
    }
    hexidecimal_from_octal = hexidecimal_from_octal.toString(16)
}




function convertHD(hex){
    decimal_from_hexidecimal = parseInt(hex, 16)
}

function convertHB (hex){
    binary_from_hexidecimal = parseInt(hex, 16)

    let power = 1;
    let power_of_two = 0;
    let biggest_number = 2;
    let dec = binary_from_hexidecimal
    binary_from_hexidecimal = ""

    if (dec != 1 && dec != 0) {
        while (biggest_number <= dec / 2) {
            biggest_number = biggest_number * 2
            power++
        }

        while (power != -1) {
            power_of_two = 2 ** power
            if (dec - power_of_two > -1) {
                binary_from_hexidecimal = binary_from_hexidecimal + "1"
                dec = dec - power_of_two
            }
            else {
                binary_from_hexidecimal = binary_from_hexidecimal + "0"
            }
            power--

        }

    }
    else if (dec == 1) {
        binary_from_hexidecimal = "1"

    }
    else if (dec == 0) {
        binary_from_hexidecimal = "0"
    }
    else {
        binary_from_hexidecimal = "error"
    }
}

function convertHO (hex) {
    octal_from_hexidecimal = parseInt(hex, 16)
    octal_from_hexidecimal = octal_from_hexidecimal.toString(8)
}




