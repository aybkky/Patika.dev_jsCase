function oddOrEven(number) {
    var sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    if(sum %2 != 0 ){
        console.log("Odd")
        return "Odd"
    } else {
        console.log("Even")
        return "Even"
    }
}

oddOrEven(1349);
