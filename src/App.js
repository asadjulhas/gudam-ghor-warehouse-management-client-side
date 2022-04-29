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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
