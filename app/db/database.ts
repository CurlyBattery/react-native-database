import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('app.db');

export function initDB() {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL    
        );
    `);
}
