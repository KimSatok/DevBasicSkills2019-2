var octal_from_decimal = ""
var binary_from_decimal = ""
var hexidecimal_from_decimal = ""
var decimal_from_binary = 0
var decimal_from_octal = 0
var decimal_from_hexidecimal = 0
//Please do not use decimal numbers bigger than 16 symbols, I guess
function convertDB(dec) {
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
}

function convertDO(dec2) {
    octal_from_decimal = dec2.toString(8);
}


function convertDH(dec3) {
    hexidecimal_from_decimal = dec3.toString(16);
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

function convertHD(hex){
    let stringhex = hex.toString(16)
    let count = 0;
    let hex2 = []
    while (count < stringhex.length) {
        hex2.push(stringhex.substring(count, count + 1))
        count++
    }
    let power = hex2.length - 1;
    for (let i of hex2 ){
        if (i == "A" || i == "a") {
            decimal_from_hexidecimal = decimal_from_hexidecimal + 10 * 16 ** power
            power--
        }
        if (i == "B" || i == "b") {
            decimal_from_hexidecimal = decimal_from_hexidecimal + 11 * 16 ** power
            power--
        }
        if (i == "C" || i == "c") {
            decimal_from_hexidecimal = decimal_from_hexidecimal + 12 * 16 ** power
            power--
        }
        if (i == "D" || i == "d") {
            decimal_from_hexidecimal = decimal_from_hexidecimal + 13 * 16 ** power
            power--
        }
        if (i == "E" || i == "e") {
            decimal_from_hexidecimal = decimal_from_hexidecimal + 14 * 16 ** power
            power--
        }
        if (i == "F" || i == "f") {
            decimal_from_hexidecimal = decimal_from_hexidecimal + 15 * 16 ** power
            power--
        }
        else {
            decimal_from_hexidecimal = decimal_from_hexidecimal + i * 16 ** power
            power--
        }
    }

}
