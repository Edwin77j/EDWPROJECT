import { User } from '../models/User';

const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice.j@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.s@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie.b@example.com" },
];

export class UserService {

  constructor() {
    this.users = [...initialUsers];
  }

  getAllUsers() {
    return this.users;
  }

  createUser(data) {
    const newUser = new User(
      Date.now(),
      data.name,
      data.email
    );

    this.users.push(newUser);
  }

  updateUser(id, updatedData) {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedData };
    }
  }

  deleteUser(id) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
