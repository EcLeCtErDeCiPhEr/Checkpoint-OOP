// Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price for this item
    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = []; // Array to hold ShoppingCartItem instances
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get the total price of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }

    // Method to display cart items
    displayCart() {
        if (this.items.length === 0) {
            console.log("The cart is empty.");
            return;
        }
        console.log("Cart Items:");
        this.items.forEach(item => {
            console.log(
                `${item.product.name} - $${item.product.price} x ${item.quantity} = $${item.calculateTotalPrice()}`
            );
        });
        console.log(`Total Price: $${this.getTotalPrice()}`);
    }
}

// Example Usage

// Creating Products
const product1 = new Product(1, "Apple", 1.5);
const product2 = new Product(2, "Banana", 1.2);
const product3 = new Product(3, "Orange", 2.0);

// Creating ShoppingCart
const myCart = new ShoppingCart();

// Adding Items to the Cart
myCart.addItem(product1, 3); // Adding 3 Apples
myCart.addItem(product2, 5); // Adding 5 Bananas
myCart.addItem(product3, 2); // Adding 2 Oranges

// Displaying the Cart
myCart.displayCart();

// Removing an Item from the Cart
myCart.removeItem(2); // Remove Bananas

// Displaying the Cart After Removal
myCart.displayCart();
