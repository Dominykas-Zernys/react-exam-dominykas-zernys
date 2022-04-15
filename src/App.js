import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import ProtectedRoute from './helpers/ProtectedRoute';
import Add from './pages/Add/Add';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthContext from './store/AuthContext';
import fetchGet from './helpers/fetchGet';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import Header from './components/Header/Header';
import LoadingElement from './UI/LoadingElement/LoadingElement';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  );

  useEffect(() => {
    checkForToken();
  }, []);

  async function checkForToken() {
    const res = await fetchGet('v1/content/skills', token);
    res.err ? setIsLoggedIn(false) : setIsLoggedIn(true);
    setLoading(false);
  }

  function login(bearerToken) {
    setToken(bearerToken);
    localStorage.setItem('token', bearerToken);
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      <div className='App'>
        <Switch>
          <Route path='/register'>
            <Register loading={loading} />
          </Route>
          <Route path='/login'>
            <Login loading={loading} />
          </Route>
          <ProtectedRoute loading={loading} path='/' exact>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute loading={loading} path='/add'>
            <Add />
          </ProtectedRoute>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
