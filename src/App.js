import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Inventory from "./Components/Pages/Inventory/Inventory";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import RequireAuth from "./RequireAuth";
import Products from "./Components/Pages/Products/Products";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./Components/Pages/NotFound/NotFound";
import ManageInventories from "./Components/Pages/ManageInventories/ManageInventories";
import MyItems from "./Components/Pages/MyItems/MyItems";
import Blogs from "./Components/Pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="/products" element={<Products/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage-inventories" element={
        <RequireAuth>
        <ManageInventories/>
        </RequireAuth>
        } />
        <Route path="/my-items" element={
        <RequireAuth>
        <MyItems/>
        </RequireAuth>
        } />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
