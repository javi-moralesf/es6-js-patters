import AbstractFactory from 'AbstractFactory';

export default class Bakery {

    constructor() {
        this.stock = {};
    }

    addStock(dessertFactory:AbstractFactory) {
        this.stock[dessertFactory.getStockId()] = dessertFactory;
    }

    buyDessert(stockId:String) {
        if(!this.stock[stockId]){
            throw new Error("No stock found for product ${stockId}");
        }
        var dessert = this.stock[stockId].getDessert();
        console.log({
            name: dessert.toString(),
            price: dessert.getPrice()
        });
    }
}