import { Route, Switch } from 'react-router-dom';
import './App.css';
import Add from './pages/Add/Add';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/add'>
          <Add />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
