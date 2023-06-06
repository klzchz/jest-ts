import Product from "../products/product";
import Cart from "./cart"

describe('Cart',() => {

    it('Should be a empty cart',()=>{
      const cart = new Cart;
      expect(cart.items.length).toBe(0);
    });

    // it('Should has one item in cart',()=>{
    //   const cart = new Cart;
    //   const prod1 = new Product('Prod1',10);
      
    //   cart.addItem(prod1);

    // });
})





