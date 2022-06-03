console.log('inside js');
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //used to compare two objects with same format
console.log(_.isEqual(obj1, obj2)); ////this is used to compare two unordered objects to use this need to add library in head scripts


const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send(null);

request.onload = function () {
    var response = JSON.parse(request.responseText);

    //console.log(response);
    //printing all the flags
    /*response.forEach(function (country) {
        console.log(country.flag);
    });*/
    response.forEach((country) => {
        console.log("country name: ", country.name.official, " region: ", country.region, " subregion : ", country.subregion, " population : ", country.population);
    });
}
request.onerror = function () {
    console.log("ERROR OCCURED")
}