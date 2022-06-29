import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Categorypage from './Pages/Category/Categorypage';
import Singleproduct from './Pages/Singleproduct/Singleproduct';
import Signin from './Pages/Signin/Signin';
import Cart from './Pages/Cart/Cart';
import { useContext } from 'react';
import { contextAuth } from './Context/AuthContext';
import {
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
function App() {
  const { currentUser } = useContext(contextAuth)
  const RouterAuth = ({ children }) => {
    return currentUser? children : <Navigate to="/Login" />
  };
  return (
    <div className="App">
      <Routes>
        <Route path='/' element=
          {
            <RouterAuth>
              <Home />
            </RouterAuth>
          }
        />
        <Route path='/cart' element={<Cart />}></Route >
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Singleproduct/:productsid' element={<Singleproduct />} />
        <Route path='/Categorypage/:category' element={<Categorypage />}></Route >
      </Routes>
    </div>
  );
}

export default App;
