import Bakery from 'Bakery'
import CakeFactory from 'CakeFactory'

var store = new Bakery();
store.addStock(new CakeFactory());
store.addStock(new MuffinFactory());

console.log(
    'I bought: ',
    store.buyDessert('Cake')
);

console.log(
    'And now: ',
    store.buyDessert('Muffin')
);
