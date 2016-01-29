import AbstractFactory from 'AbstractFactory'
import Dessert from 'Dessert'
import Cake from 'Cake'

export default class CakeFactory extends AbstractFactory {
    getDessert():Dessert {
        return new Cake()
    }

    getStockId():String {
        return 'Cake';
    }
}