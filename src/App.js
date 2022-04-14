import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ProtectedRoute from './helpers/ProtectedRoute';
import Add from './pages/Add/Add';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthContext from './store/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={(isLoggedIn, login, logout)}>
      <div className='App'>
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <ProtectedRoute path='/' exact>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path='/add'>
            <Add />
          </ProtectedRoute>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
