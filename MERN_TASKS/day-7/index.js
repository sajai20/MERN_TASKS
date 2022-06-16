//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


/*class movie {
    constructor(title, studio, rating = "pg") {
        this.title = title
        this.studio = studio
        this.rating = rating
    }

    getvalue(array) {
        let arr1 = []
        array.forEach(element => {
            for (const value of Object.values(element)) {
                if (value === "pg") {
                    arr1.push(element);
                }
            }
        });
        return arr1
    }
}

const film = new movie("Casino Royale", "Eon Productions", "PG13")
const film1 = new movie("nanban", "redgiant")
const film2 = new movie("thuppaki", "redgiant")

const array = [film, film1, film2]

const newarr = film.getvalue(array)
console.log(newarr)*/


//#####################################################################################

//WRITE A PERSON CLASS TO HOLD ALL THE DETAILS
/*class PERSON {
    constructor(name, age, role, year_of_eperience, martial_status) {
        this.name = name
        this.age = age
        this.year_of_eperience = year_of_eperience
        this.martial_status = martial_status
    }

}
const person = new PERSON("sajai", 24, "developer", 2, "single");
console.log(person)*/
//########################################################################################

//CLASS TO CALCULATE UBER PRICE
/*
class UBER {
    constructor(src, dest, kilo) {
        this.src = src
        this.dest = dest
        this.kilo = kilo
    }
    //considered 25 rupees per kilometer

    getprice() {
        let price = this.kilo * 25
        console.log(`from ${this.src} to ${this.dest} the total amount is ${price}`)
    }
}

const newride = new UBER("mettupalayam", "coimbatore", 50)
console.log(newride)
newride.getprice()*/
//########################################################################################
//UML diagram to typescript class
/*class Circle {
    private radius: number = 1.0
    private color: string = "red"

    public constructor();
    public constructor(radius: number);
    public constructor(radius: number, color: string);
    public constructor(...myarray: any[]) {
        if (myarray.length === 0) {
            console.log("default constructor is called");
            return;
        }
        if (myarray.length === 1) {
            console.log("to set radius")
            this.radius = myarray[0]
            return;
        }
        if (myarray.length === 2) {
            console.log("to set radius and string ")
            this.radius = myarray[0]
            this.color = myarray[1]
            return;
        }

    }

    getRadius(): number {

        return this.radius
    }

    getColour(): string {
        return this.color
    }

    setRadius(radius: number): void {
        this.radius = radius
    }

    setColour(color: string): void {
        this.color = color
    }

    getArea(): double {
        return 3.14 * (this.radius * this.radius)
    }

    getCircumference(): double {
        return 2 * 3.14 * this.radius
    }

    toString(): string {
        return `Circle[radius = ${this.radius},color = ${this.color}]`
    }


}*/