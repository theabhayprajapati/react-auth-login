
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation.component';
import { UserContext } from './context/user/user.context';
import Dashboard from './routes/dashboard/dashboard.route';
import Login from './routes/login/login.route';
import Register from './routes/register.route';


function App() {
  const { currentUser } = React.useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route path="/" element={
          <div>
            <h1>
              {currentUser ? `Welcome ${currentUser.name}` : 'Welcome to the app'}
            </h1>
          </div>
        } />
        <Route path="/login" element={<Register />} />
        <Route path='/register' element={<Login />} />
        <Route path="*" element={<hc1>404 Not Found</hc1>} />
        <Route path="/dashboard" element={<Dashboard />} exact />
      </Route>
    </Routes >
  );
}

export default App; 