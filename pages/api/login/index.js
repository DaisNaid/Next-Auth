import bcrypt from 'bcryptjs';
import users from '../../../data/users';
import { generateToken } from '../../../utils/generateToken';

export default function handler(req, res) {
  const username = req.body.username;
  const user = users.find((user) => user.username === username);
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        id: user.id,
        email: user.email,
        username: user.username,
        token: generateToken(user),
      });
    } else {
      res.status(401).send({ message: 'Invalid Username or Password' });
    }
  } else {
    res.status(401).send({ message: 'Invalid Username or Password' });
  }
}
