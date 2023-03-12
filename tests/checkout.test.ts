import { Product } from '../src/Product';
import { Checkout } from '../src/Checkout';
import { Promotion } from '../discount/Promotion';

const products: Product[] = [
  { code: "001", name: "Curry Sauce", price: 1.95 },
  { code: "002", name: "Pizza", price: 5.99 },
  { code: "003", name: "Men’s T-Shirt", price: 25.0 }
];

const promotionalRules: Promotion[] = [
  {
    itemDiscounts: [
      {
        productCode: "002",
        minItems: 2,
        discountPrice: 3.99,
      },
    ],
  },
  {
    percentDiscount: {
      discount: 10,
      threshold: 30,
    },
  },
];

describe('Checkout', () => {
  describe('total', () => {
    it('should return the correct total for Test 1', () => {
      const co = new Checkout(promotionalRules, products);
      co.scan('001');
      co.scan('002');
      co.scan('003');
      const total = co.total;
      expect(total).toEqual('29.65');
    });

    it('should return the correct total for Test 2', () => {
      const co = new Checkout(promotionalRules, products);
      co.scan('002');
      co.scan('001');
      co.scan('002');
      const total = co.total;
      expect(total).toEqual('9.93');
    });

    it('should return the correct total for Test 3', () => {
      const co = new Checkout(promotionalRules, products);
      co.scan('002');
      co.scan('001');
      co.scan('002');
      co.scan('003');
      const total = co.total;
      expect(total).toEqual('31.44');
    });

    it('should return 0 when the cart is empty', () => {
      const co = new Checkout(promotionalRules, products);
      const total = co.total;
      expect(total).toEqual('0.00');
    });
  });
});
