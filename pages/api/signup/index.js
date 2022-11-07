import bcrypt from 'bcryptjs';
import users from '../../../data/users';

export default function handler(req, res) {
  const { email, username, password } = req.body.payload;
  const lastID = users.length;
  const hashPassword = bcrypt.hash(password);
  const newUser = {
    id: lastID + 1,
    email: email,
    username: username,
    password: hashPassword,
  };
  users.push(newUser);
  const newUserInfo = {
    id: newUser.id,
    email: newUser.email,
    username: newUser.username,
  };
  res.send({
    newUserInfo,
  });
}
