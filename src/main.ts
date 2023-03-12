import { Product } from './Product';
import { Promotion } from '../discount/Promotion';
import { Checkout } from './Checkout';

// Example usage:

const products: Product[] = [
  { code: "001", name: "Curry Sauce", price: 1.95 },
  { code: "002", name: "Pizza", price: 5.99 },
  { code: "003", name: "Men’s T-Shirt", price: 25.0 }
];

// Define the promotional rules
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

// Create a checkout object with the promotional rules
const co = new Checkout(promotionalRules, products);
co.scan("001");
co.scan("002");
co.scan("003");
const total1 = co.total; // 29.65
console.log(total1)