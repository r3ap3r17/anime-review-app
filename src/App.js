import './App.css';
import LoginPage from './components/Login/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './components/Register/SignUpPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  const token = false;

  const Home = () => {
    return <>WELCOME</>
  }

  return (
    <Routes>
      <Route path='/' element={ token ? <Home /> : <LoginPage /> } exact />
      <Route path='/register' element={ !token ? <SignUpPage /> : null } />
    </Routes>
  );
}

export default App;
