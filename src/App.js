import Navbar from "./component/common/Navbar";
import Addproduct from "./component/products/Addproduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/users/Signup";
import Login from "./component/users/Login";
import ShowProducts from "./component/products/ShowProducts";


function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/add-product" element={<Addproduct />}></Route>
          <Route path="/show-products" element={<ShowProducts />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
