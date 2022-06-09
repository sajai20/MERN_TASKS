const arrayj = [10, 20, 30, 40, 51, 53, 3, 7]
const fruits = ["banana", "orange", "lemon", "apple", "mango"];

//printing odd number in a array using arrow function
/*let fun = (arrr) => {
    let ar = [];
    arrr.forEach(element => {
        if (element % 2 != 0) {
            ar.push(element)
        }
    });
    return ar;
}

console.log(fun(arrayj));*/




//captial case
/*const newarr = ((a1) => {
    let arr2 = [];
    a1.forEach(function (x) {
        arr2.push(x.charAt(0).toLocaleUpperCase() + x.substr(1).toLocaleLowerCase())
    });
    return arr2;
});

console.log(newarr(fruits))*/

//sum of all numbers in an array

/*let sum = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sum(arrayj));*/


//returning all the prime numbers in an array

/*const array2 = (array1) => {

    array1.forEach(element => {
        let j = 2;
        let flag = true;
        for (j = 2; j <= element / 2; j++) {
            if (element % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag == true)
            console.log(element);
    });
}
array2(arrayj)*/

//returning all the palindrame in the given array
const pal = ["malayalam", "sajai", "radar"];
let myfunction = (a) => {
    let array2 = []
    a.forEach(function (element) {
        let i, j
        let flag = true;
        for (i = 0, j = element.length - 1; i < j; i++, j--) {
            if (element[i] != element[j]) {
                flag = false;
            }
        }
        if (flag == true) {
            array2.push(element);
        }

    });
    return array2;
}

console.log(myfunction(pal))


