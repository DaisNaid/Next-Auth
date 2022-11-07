import Link from 'next/link';
import useGetUserInfo from '../../hooks/useGetUserInfo';

function ProtectedRoute({ children }) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserInfo = localStorage.getItem('userInfo');
    setUserInfo(JSON.parse(getUserInfo));
  }, []);

  return userInfo ? children : <Link href="/auth/login" />;
}

export default ProtectedRoute;
