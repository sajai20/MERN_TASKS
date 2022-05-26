console.log("HI JAVASCRIPT");

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send(null);

request.onload = function () {
    var response = JSON.parse(request.responseText);
    // console.log(response);

    // normal for loop
    /*for (var i = 0; i < response.length; i++) {
        console.log(response[i].flag);
        console.log(response[i].languages);
    }*/

    //iterating over object using foreach in arrow function
    /*response.forEach((country) => {
        console.log(country.flag);
    });*/

    //iterating over object using call back function or function keyword function
    /* response.forEach(function (country) {
         console.log(country.flag);
     });*/

    //FOROF
    /*for (const country of response) {
        console.log(country.flag);
    }
    //iterating objects
    response.forEach((country) => {
        console.log("###########################", country.flag);
        for (const keys of Object.keys(country)) {
            console.log(keys, ":", country[keys]);
        }
    });*/

    //printing only objects valued
    /*response.forEach((country) => {
        console.log("###########################", country.flag);
        for (const value of Object.values(country)) {
            console.log(value);
        }
    });*/

    //FORIN is used to iterate only objects
    response.forEach((country) => {
        console.log("###########################", country.flag);
        for (const key in country) {
            console.log(key);
        }
    });
}

request.onerror = function () {
    console.log("ERROR OCCURED");
}


