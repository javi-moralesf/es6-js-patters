import Dessert from 'Dessert'

export default class Muffin extends Dessert {

    getPrice():Number {
        return 5.25;
    }

    getIngredients():Array {
        return [
            'cream',
            'flavour',
            'butter',
            'eggs'
        ]
    }

    toString():String {
        return 'Cream muffin';
    }
}