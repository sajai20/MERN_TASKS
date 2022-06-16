//UML diagram to typescript class
class Circle {
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


}