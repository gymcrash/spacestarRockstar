import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';

// 1. Define the User interface for strict type safety
export interface User {
  id: number;
  username: string;
  nickname: string;
  rank: number;
  createdAt: string;
}

// 2. Define the overall structure of your db.json schema
interface DatabaseSchema {
  users: User[];
}

// Define the file path for db.json
const file = path.resolve('db.json');
const adapter = new JSONFile<DatabaseSchema>(file);

// Default data if db.json doesn't exist yet
const defaultData: DatabaseSchema = { users: [] };
const db = new Low<DatabaseSchema>(adapter, defaultData);

// Initialize database (reads file or creates it with defaults)
async function initDb() {
  await db.read();
  db.data ||= defaultData;
  await db.write();
}

// Initialize on startup
await initDb();

// --- PUBLIC ABSTRACTION API ---

// 1. Get all users
export async function getUsers(): Promise<User[]> {
  await db.read();
  return db.data!.users;
}

// 2. Get a single user by ID
export async function getUserById(id: number): Promise<User | null> {
  await db.read();
  return db.data!.users.find(user => user.id === id) || null;
}

// 3. Add a new user (username, nickname, rank number)
export interface NewUserData {
  username: string;
  nickname: string;
  rank: number;
}

export async function addUser({ username, nickname, rank }: NewUserData): Promise<User> {
  await db.read();

  const newUser: User = {
    id: Date.now(), // Simple unique ID
    username,
    nickname,
    rank: Number(rank), // Ensure rank is stored as a number
    createdAt: new Date().toISOString()
  };

  db.data!.users.push(newUser);
  await db.write(); // Saves automatically to db.json
  
  return newUser;
}