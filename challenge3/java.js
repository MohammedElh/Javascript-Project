function SelectionSort() {
    var Numbers = [1, 8, 5, 9, 4, 6, 2, 3, 7];
    var a = 0;
    for (var i = 0; i < Numbers.length; i++) {
        for (var j = i + 1; j < Numbers.length; j++)
            if (Numbers[i] > Numbers[j]) {
                a = Numbers[i];
                Numbers[i] = Numbers[j];
                Numbers[j] = a;
            }
    };
    alert(Numbers);
}

function BubbleSort() {
    var Numbers = [1, 8, 5, 9, 4, 6, 2, 3, 7];
    var a = 0;
    for (var i = 0; i < (Numbers.length); i++) {
        for (var j = 0; j < (Numbers.length - 1); j++) {
            if (Numbers[j] > Numbers[j + 1]) {
                a = Numbers[j];
                Numbers[j] = Numbers[j + 1];
                Numbers[j + 1] = a;
            }
        }
    }
    alert(Numbers);
}

function InsertionSort() {
    var Numbers = [1, 8, 5, 9, 4, 6, 2, 3, 7];
    var a = 0;
    for (i = 1; i < (Numbers.length); i++) {
        j = i;
        while (j > 0 && Numbers[j - 1] > Numbers[j]) {
            a = Numbers[j];
            Numbers[j] = Numbers[j - 1];
            Numbers[j - 1] = a;
            j = j - 1;
        }
    }
    alert(Numbers);
}

function LinearSearch() {
    var Numbers = [1, 8, 5, 9, 4, 6, 2, 3, 7];
    userInput = window.prompt("Enter a number from 1 to 9 :");
    for (i = 0; i < Numbers.length; i++) {
        if (userInput == Numbers[i]) {
            alert("The position of this number is : " + (i + 1))
        }
    }
}

function Matrix() {
    var n=0
        const inputNumbers = window.prompt("Enter numbers seerating by ', ' :");
        const Numbers = inputNumbers.split(", ");
    userInput = window.prompt("Enter a number from 1 to 9 :");
    for (j = 0; j < Numbers.length; j++){
        if (userInput == Numbers[j]) {
            n=n+1;
        }
    }
    alert(n);
}
// function sort(){
//     var Numbers = [100, 8, 50, 91, 4, 6, 2, 3, 7];
// alert(Numbers.sort())
// }
// sort()
