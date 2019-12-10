var numbers = []
function generator(min, max, cycles) {
    let count = 0
    let number
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
       console.log ('number ' + key + ' appears ' + result[key] + " times");
    }
}

generator(1, 5, 10)