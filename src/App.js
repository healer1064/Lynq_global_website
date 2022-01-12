import './App.css';
import Home from './pages/home/home';
import Exclusive from './pages/exclusive/exclusive';
import Confirmation from './pages/exclusive/confirmation'
import SignUp from './pages/auth/signUp'
import SignIn from './pages/auth/signIn'
import ForgotPassword from './pages/auth/forgotPassword'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} exact />
          <Route path="/exclusive" element={<Exclusive />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;