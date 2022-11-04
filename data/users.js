import bcrypt from 'bcryptjs';

const users = [
  {
    id: 1,
    email: 'iamtryve@gmail.com',
    username: 'Tryve',
    password: bcrypt.hashSync('9999'),
  },
  {
    id: 2,
    email: 'iamfaketryve@gmail.com',
    username: 'Ayo',
    password: bcrypt.hashSync('9999'),
  },
  {
    id: 1,
    email: 'iamnottryve@gmail.com',
    username: 'Kirai',
    password: bcrypt.hashSync('9999'),
  },
];

export default users;
