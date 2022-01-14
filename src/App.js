import './App.css';
import Home from './pages/home/home';
import ProjectPayment from './pages/project/payment';
import ProjectConfirmation from './pages/project/confirmation';
import ExclusiveMembership from './pages/exclusive/exclusiveMembership';
import ExclusivePayment from './pages/exclusive/exclusivePayment';
import ExclusiveConfirmation from './pages/exclusive/exclusiveConfirmation'
import ExclusiveContent from './pages/exclusive/exclusiveContent'
import CallBook from './pages/call/callBook'
import CallPayment from './pages/call/payment'
import CallConfirmation from './pages/call/callConfirmation'
import RequestMain from './pages/request/requestMain'
import RequestPayment from './pages/request/requestPayment'
import RequestConfirmation from './pages/request/confirmation'

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
          <Route path="/project/payment" element={<ProjectPayment />} />
          <Route path="/project/confirmation" element={<ProjectConfirmation />} />
          <Route path="/exclusive/membership" element={<ExclusiveMembership />} />
          <Route path="/exclusive/payment" element={<ExclusivePayment />} />
          <Route path="/exclusive/confirmation" element={<ExclusiveConfirmation />} />
          <Route path="/exclusive/content" element={<ExclusiveContent />} />
          <Route path="/call/book" element={<CallBook />} />
          <Route path="/call/payment" element={<CallPayment />} />
          <Route path="/call/confirmation" element={<CallConfirmation />} />
          <Route path="/request/main" element={<RequestMain />} />
          <Route path="/request/payment" element={<RequestPayment />} />
          <Route path="/request/confirmation" element={<RequestConfirmation />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;