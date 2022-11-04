import bcrypt from 'bcryptjs';
import users from '../../../data/users';

export default function handler(req, res) {
  const existingEmails = new Array();

  const pushEmail = users.map((user) => {
    existingEmails.push(user.email);
  });

  let allowEmail = false;

  const allowEmailCheck = () => {
    if (existingEmails.includes(req.body.email)) {
      allowEmail = false;
    } else {
      allowEmail = true;
    }
  };
  if (!allowEmail) {
    res.status(201).send({ message: 'You have an account, please log in' });
  } else {
    const lastID = users.length;
    const hashPassword = bcrypt.hash(req.body.password);
    const newUser = {
      id: lastID + 1,
      email: req.body.email,
      username: req.body.username,
      password: hashPassword,
    };
    users.push(newUser);
    res.status(200).send({ message: 'Account Created' });
  }
}
