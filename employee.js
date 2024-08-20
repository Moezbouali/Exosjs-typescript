"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Employee = void 0;
// Déclaration de la classe Employee
var Employee = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // Méthode pour obtenir le salaire annuel
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    return Employee;
}());
exports.Employee = Employee;
// Déclaration de la classe Manager qui hérite de Employee
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    // Constructeur pour initialiser les propriétés, y compris celles de Employee
    function Manager(id, name, salary, bonus) {
        var _this = _super.call(this, id, name, salary) || this; // Appel du constructeur de Employee
        _this.bonus = bonus;
        return _this;
    }
    // Redéfinition de la méthode getAnnualSalary pour inclure le bonus
    Manager.prototype.getAnnualSalary = function () {
        return _super.prototype.getAnnualSalary.call(this) + this.bonus;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
