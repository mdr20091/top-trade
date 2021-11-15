import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Matthew Rodriguez',
    email: 'matthew@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John Doe',
    email: 'dJohn@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email: 'dJane@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users 
