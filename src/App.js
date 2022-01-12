import './App.css';
import Home from './pages/home';
import Exclusive from './pages/exclusive';
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import ForgotPassword from './pages/forgotPassword'
import Confirmation from './pages/confirmation'
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