// Déclaration de l'interface User
export interface User {
    id: number;
    name: string;
    email: string;
}

// Simuler une API avec setTimeout
export async function getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
                { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
            ]);
        }, 1000);
    });
}