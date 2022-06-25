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
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/option' element={<Home/>}></Route >
      </Routes>
    </div>
  );
}

export default App;
