// Déclaration de la classe Product
export class Product {
    // Déclaration des propriétés
    id: number;
    name: string;
    price: number;

    // Constructeur pour initialiser les propriétés
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Méthode pour obtenir le prix avec taxe
    getPriceWithTax(): number {
        return this.price * 1.2;
    }
}