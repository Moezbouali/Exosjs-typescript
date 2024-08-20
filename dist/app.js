"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("./userService"); // Assurez-vous que le chemin est correct
// Fonction principale pour récupérer et afficher les utilisateurs
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Appel de la fonction getUsers pour obtenir la liste des utilisateurs
            const users = yield (0, userService_1.getUsers)();
            // Affichage de la liste des utilisateurs dans la console
            console.log("Users List:");
            users.forEach(user => {
                console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
            });
        }
        catch (error) {
            // Gestion des erreurs éventuelles
            console.error("An error occurred while fetching users:", error);
        }
    });
}
// Exécution de la fonction principale
main();
