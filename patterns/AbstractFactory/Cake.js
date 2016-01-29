import Dessert from 'Dessert'

export default class Cake extends Dessert {

    getPrice():Number {
        return 10.85;
    }

    getIngredients():Array {
        return [
            'chocolate',
            'flavour',
            'butter',
            'eggs'
        ]
    }

    toString():String {
        return 'Chocolate cake';
    }
}