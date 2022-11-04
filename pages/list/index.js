import axios from 'axios';

const url = 'http://localhost:5000/users';

function ListUsers({ users }) {
  return (
    <>
      <h1>List of Users: </h1>
      {users.map((user) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </>
  );
}

export default ListUsers;

export async function getServerSideProps() {
  const response = await axios.get(url);
  const data = response.data;

  return { props: { users: data } };
}
