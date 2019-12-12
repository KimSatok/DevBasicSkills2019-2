
function generator() {
    let min = document.getElementById("inputmin").value
    let max = document.getElementById("inputmax").value
    let cycles = document.getElementById("inputgenerations").value
    let output2 = document.getElementById("output")
    var numbers = []
    let count = 0
    let number
    let output = ""
    while (count < cycles) {
        number = Math.floor(Math.random() * (max - min) + min)
        numbers.push(number)
        count++
    }
    var result = {};
    for(let i of numbers) {
    result[i] = result[i] + 1 || 1;
    }

    for (var key in result) {
       output = output + 'number ' + key + ' appears ' + result[key] + " times" + ("<br>")  ;

    }
    
    output2.innerHTML = output
}