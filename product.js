"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Déclaration de la classe Product
var Product = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Méthode pour obtenir le prix avec taxe
    Product.prototype.getPriceWithTax = function () {
        return this.price * 1.2;
    };
    return Product;
}());
exports.Product = Product;
