export default class Dessert {
    getPrice():Number{
        throw new TypeError("getPrice is an abstract method.")
    }

    getIngredients():Array{
        throw new TypeError("getIngredients is an abstract method.")
    }

    toString():String{
        throw new TypeError("toString is an abstract method.")
    }
}