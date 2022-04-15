import { useContext } from 'react';
import { Route } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import Login from '../pages/Login/Login';
import AuthContext from '../store/AuthContext';

function ProtectedRoute({ children, loading, ...rest }) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route {...rest}>
      {loading ? <LoadingPage /> : isLoggedIn ? children : <Login />}
    </Route>
  );
}

export default ProtectedRoute;
