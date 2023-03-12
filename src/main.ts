import { Product } from './Product';
import { Promotion } from '../discount/Promotion';

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
  
console.log(products,promotionalRules);