import Dessert from 'Dessert';

export default class AbstractFactory {
    constructor() {
        if (new.target === AbstractFactory) {
            throw new TypeError("${new.target} is an abstract class.")
        }
    }

    getDessert():Dessert {
        throw new TypeError("getDessert is an abstract method.")
    }

    getStockId():String {
        throw new TypeError("getStockId is an abstract method.")
    }
}