import Signup from "./Signup";
import { useState } from "react";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../context/AuthContext";
import ProtectedPage from "./PrivateRoute";

function App() {
  const [currentUser,setCurrentUser] = useState(null);
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
                <Route element={<ProtectedPage />}>
                  <Route path='/signup' element={<Signup />} />
                  <Route path='login' element={<Login />} />
                </Route>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
  );
}

export default App;
