import users from '../../../data/users';

export default function handler(req, res) {
  const { userID } = req.query;
  const user = users.find((user) => user.id === userID);
  res.status(200).send(user);
}
