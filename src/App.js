import './App.css';
import LoginPage from './components/Login/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './components/Register/SignUpPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <SignUpPage /> } exact />
      <Route path='/login' element={ <LoginPage /> } />
    </Routes>
  );
}

export default App;
