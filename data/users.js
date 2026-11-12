import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin User',
    email: 'admin@aurelia.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'admin',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'user',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'user',
  },
];

export default users;
