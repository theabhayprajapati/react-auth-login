
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation.component';
import Dashboard from './routes/dashboard/dashboard.route';
import Login from './routes/login/login.route';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;