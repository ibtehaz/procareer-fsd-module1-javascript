/* Create a javascript object that represents a food store product.
The item should contain a name, description, bulk price, and consumer price.

Create another javascript object that contains a single method for printing the above object's name and description.

Create another method on the object from step 2 that returns a product's price with a discount applied on consumer price.
Supposing the product's price is 5, calling the discount method with a discount of 15% (0.15) will return 4.25.

Consider the food product with below data:
name: Apple
description: Fresh and juicy apple
bulkPrice: 1.50
consumerPrice: 2.00

Expected Output:
----------------
Name: Apple
Description: Fresh and juicy apple
Discounted Price: $1.70

*/

const fruitObj = {
    name: "Apple",
    description: "Fresh and juicy apple",
    bulkPrice: 1.50,
    consumerPrice: 2.00
}

const fruitOps = {
    print: () => console.log(`Name: ${fruitObj.name}\nDescription: ${fruitObj.description}`),
    discount: () => console.log(`Discounted Price: $${(fruitObj.consumerPrice * 0.85).toFixed(2)}`)
}

fruitOps.print()
fruitOps.discount()