import Signup from "./Signup";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
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
                <Route exact path='/' element={<Dashboard />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='login' element={<Login />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
  );
}

export default App;
