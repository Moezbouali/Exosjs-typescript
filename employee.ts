// Déclaration de la classe Employee
export class Employee {
    id: number;
    name: string;
    salary: number;

    // Constructeur pour initialiser les propriétés
    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Méthode pour obtenir le salaire annuel
    getAnnualSalary(): number {
        return this.salary * 12;
    }
}

// Déclaration de la classe Manager qui hérite de Employee
export class Manager extends Employee {
    bonus: number;

    // Constructeur pour initialiser les propriétés, y compris celles de Employee
    constructor(id: number, name: string, salary: number, bonus: number) {
        super(id, name, salary); // Appel du constructeur de Employee
        this.bonus = bonus;
    }

    // Redéfinition de la méthode getAnnualSalary pour inclure le bonus
    getAnnualSalary(): number {
        return super.getAnnualSalary() + this.bonus;
    }
}