import Signup from "./Signup";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";
import { getAuth } from "firebase/auth";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";



function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
      <Container className="d-flex justify-content-center align-items-center"
      style={{
        minHeight : '100vh',
      }}
      >
        <div className="w-100"
        style={{
          maxWidth : '400px',
        }}
        >
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route exact path='/' element={<Dashboard/>}/>
                <Route path='/signup' element={<Signup />} />
                <Route path='login' element={<Login />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
                <Route path='update-profile' element={<UpdateProfile />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
  );
}

export default App;
