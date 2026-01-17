import {db} from './database';

export type User = {
    id: number;
    name: string;
    email: string;
};

export function createUser(name: string, email: string) {
    db.runSync(
        `INSERT INTO users (name, email) VALUES (?, ?);`,
        [name, email]
    );
}

export function getAllUsers(): User[] {
    return db.getAllSync<User>('SELECT * FROM users;');
}
