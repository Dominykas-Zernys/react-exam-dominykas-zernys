import { useContext } from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import AuthContext from '../store/AuthContext';

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(AuthContext);

  return <Route {...rest}>{isLoggedIn ? children : <Login />}</Route>;
}

export default ProtectedRoute;
