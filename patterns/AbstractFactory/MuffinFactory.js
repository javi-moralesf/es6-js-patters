import AbstractFactory from 'AbstractFactory'
import Dessert from 'Dessert'
import Muffin from 'Muffin'

export default class MuffinFactory extends AbstractFactory {
    getDessert():Dessert {
        return new Muffin()
    }

    getStockId():String {
        return 'Muffin';
    }
}