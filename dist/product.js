"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Déclaration de la classe Product
class Product {
    // Constructeur pour initialiser les propriétés
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Méthode pour obtenir le prix avec taxe
    getPriceWithTax() {
        return this.price * 1.2;
    }
}
exports.Product = Product;
