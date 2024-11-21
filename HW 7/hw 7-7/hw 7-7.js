class Car {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            console.log(key, this[key])
        }
    };

    increaseMaxSpeed(newSpeed) {
        if (this.maxSpeed > 0)
            this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newYearOfManufacture) {
        if (newYearOfManufacture > 1815)
            this.yearOfManufacture = newYearOfManufacture;
    };

    addDriver(driverObj) {
        if (driverObj) this.dtiver = driverObj;
    }
}

const car = new Car('Audi', 'Audi Company', 2015, 400, 200);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(200);
car.changeYear(2020);
car.addDriver({})
console.log(car);
