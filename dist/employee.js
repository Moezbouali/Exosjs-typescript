"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Employee = void 0;
// Déclaration de la classe Employee
class Employee {
    // Constructeur pour initialiser les propriétés
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // Méthode pour obtenir le salaire annuel
    getAnnualSalary() {
        return this.salary * 12;
    }
}
exports.Employee = Employee;
// Déclaration de la classe Manager qui hérite de Employee
class Manager extends Employee {
    // Constructeur pour initialiser les propriétés, y compris celles de Employee
    constructor(id, name, salary, bonus) {
        super(id, name, salary); // Appel du constructeur de Employee
        this.bonus = bonus;
    }
    // Redéfinition de la méthode getAnnualSalary pour inclure le bonus
    getAnnualSalary() {
        return super.getAnnualSalary() + this.bonus;
    }
}
exports.Manager = Manager;
