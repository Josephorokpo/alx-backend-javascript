import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = 0;
        this._currency = null;

        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        if (typeof value === 'number') {
            this._amount = value;
        } else {
            throw new Error('Amount must be a number');
        }
    }

    get currency() {
        return this._currency;
    }

    set currency(value) {
        if (value instanceof Currency) {
            this._currency = value;
        } else {
            throw new Error('Currency must be an instance of Currency');
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new Error('Amount and conversionRate must be numbers');
        }
        return amount * conversionRate;
    }
}
