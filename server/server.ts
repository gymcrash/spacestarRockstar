import express, { Request, Response } from 'express';
import cors from 'cors';
import { getUsers, getUserById, addUser } from './data/db.ts';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Define a TypeScript Interface for User creation request body
interface UserRequestBody {
  username: string;
  nickname: string;
  rank: number;
}

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Express backend!' });
});

app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// POST: Add a new user
app.post('/api/users', async (req: Request<{}, {}, UserRequestBody>, res: Response) => {
  try {
    const { username, nickname, rank } = req.body;

    if (!username || !nickname || rank === undefined) {
      res.status(400).json({ error: 'Username, nickname, and rank are required.' });
      return;
    }

    const newUser = await addUser({ username, nickname, rank });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.listen(PORT, () => {
  console.log(`TypeScript Server running on http://localhost:${PORT}`);
});