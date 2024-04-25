import Car from './10-car.js';

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    get range() {
        return this._range;
    }

    set range(value) {
        if (typeof value === 'string') {
            this._range = value;
        } else {
            throw new Error('Range must be a string');
        }
    }

    cloneCar() {
        const clone = new Car(this._brand, this._motor, this._color);
        return clone;
    }
}
