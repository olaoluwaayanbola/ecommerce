import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Categorypage from './Pages/Category/Categorypage';
import Singleproduct from './Pages/Singleproduct/Singleproduct';
import Signin from './Pages/Signin/Signin';
import Cart from './Pages/Cart/Cart';
import {
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
function App() {
  const user = false
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route >
        <Route path='/cart' element={<Cart />}></Route >
        <Route path='/Signin' element=
          {
            user ? <Navigate to="/" /> : <Login />
          } />
        <Route path='/Login' element=
          {
            user ? <Navigate to="/" /> : <Login />
          } />
        <Route path='/Singleproduct/:productsid' element={<Singleproduct />} />
        <Route path='/Categorypage/:category' element={<Categorypage />}></Route >
      </Routes>
    </div>
  );
}

export default App;
