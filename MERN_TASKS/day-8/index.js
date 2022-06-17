const request = new XMLHttpRequest()

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send(null);

request.onload = function () {
    var response = JSON.parse(request.responseText)
    console.log(response)
    console.log("############################################################################")

    //a.printing all the countries in asian continents using filter method
    /*const allAsianCountries = response.filter((Element) => {
        if (Element.continents[0] === "South America") {
            return true
        }
        return false
    })

    console.log(allAsianCountries)*/

    //b.printing all trhe countries with population less than 2 lakhs

    /* const lessthantwolakhs = response.filter((Element) => {
         if (Element.population < 200000)
             return true
         return false
     })
     console.log(lessthantwolakhs)*/

    //c.printing name ,captial,flag usinf foreach

    /*response.forEach(element => {
        console.log(`NAME : ${element.name.common} CAPTIAL : ${element.capital} FLAG : ${element.flag} `)
    });*/

    //d.printing total population of countries using reduce function

    /*const totalpopulation = response.reduce((total, country) => total + country.population, 0)

    console.log(totalpopulation)*/

    //e.printing the country which uses US dollar's

    /* response.forEach(element => {
         for (const key in element.currencies) {
             if (key === 'USD')
                 console.log(element.name.common)
         }
 
     });*/

}
request.onerror = function () {
    console.log("ERROR OCCURED")
}