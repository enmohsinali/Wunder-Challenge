
# Documentation

  

## Overview

This project implements a checkout system for a store using TypeScript. The system can scan products, calculate their total price, and apply promotions to give discounts on certain items or on the total purchase. The code is designed to be modular and extensible, allowing new types of promotions or products to be added easily.

## Architecture

The code consists of several modules:

-   `Product.ts`: defines the `Product` interface, which represents a product in the store.
-   `ItemDiscount.ts`: defines the `ItemDiscount` interface, which represents a discount on a specific product when a certain quantity of that product is purchased.
-   `PercentDiscount.ts`: defines the `PercentDiscount` interface, which represents a percentage discount on the total purchase when a certain threshold amount is reached.
-   `Promotion.ts`: defines the `Promotion` interface, which represents a set of discounts that can be applied to a purchase.
-   `Checkout.ts`: defines the `Checkout` class, which implements the checkout system. It keeps track of the items scanned by the customer, the products in the store, and the promotions that can be applied to the purchase. It also has methods for adding products, scanning items, and calculating the total price with discounts applied.
-   `main.ts`: provides an example usage of the `Checkout` class.

## Trade-off
-  The `products` array is stored in memory instead of being retrieved from a database, which may not be optimal for large datasets.
- The `products` array is given to the constructor of checkout class every time when it is initiated, instead of being retrieved from a database, which may not be optimal for large datasets. 
- The `applyItemDiscounts` method uses a nested loop to iterate over the promotions and the items in the cart. This can be inefficient for large data sets, as the number of iterations can grow quadratically with the number of items and promotions. However, for small data sets, the performance impact is negligible, and the simplicity of the code is more important.

## Running the code
To run this TypeScript code, you need to perform the following steps:

1.  Install Node.js: If you haven't already, download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org).
    
2.  Install TypeScript: You need to install TypeScript globally on your system using the following command:

```
npm install -g typescript
```
3.  Clone the repository by running following command:
```
clone https://github.com/enmohsinali/Wunder-Challenge.git
```
    
4.  Create a new file for the TypeScript code with a ".ts" file extension, for example, `main.ts`, and paste the code you want to run into this file.
    
5.  Install project dependencies: Install the project's dependencies by running the following command in the project's directory:
```
npm install
```

6.  Compile the TypeScript code: Compile the TypeScript code into JavaScript using the TypeScript compiler (tsc) by running the following command in the project's directory:

```
tsc
```
7.  Run the JavaScript code: Run the generated JavaScript file using Node.js by running the following command in the project's directory:
```
node ./dist/src/main.js
```

8. You can skip step no 6 and 7 and just simple run following command in project's directory which can compile and run the code

```
npm start
```

