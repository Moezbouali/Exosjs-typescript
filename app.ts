import { getUsers } from './userService'; // Assurez-vous que le chemin est correct

// Fonction principale pour récupérer et afficher les utilisateurs
async function main() {
    try {
        // Appel de la fonction getUsers pour obtenir la liste des utilisateurs
        const users = await getUsers();
        
        // Affichage de la liste des utilisateurs dans la console
        console.log("Users List:");
        users.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
        });
    } catch (error) {
        // Gestion des erreurs éventuelles
        console.error("An error occurred while fetching users:", error);
    }
}

// Exécution de la fonction principale
main();