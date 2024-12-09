import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Header from "./components/Header";
import ParentSignup from "./pages/ParentSignup";
import LandingPage from "./pages/LandingPage";
import AdminHome from "./modules/admin/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import ProtecterRoute from "./ProtecterRoute";
import AdminLayout from "./layout/AdminLayout";

function App() {
  const [user, setUser] = useState();
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/parentSignup" element={<ParentSignup />} />

          <Route
            path="/admin"
            element={
              <ProtecterRoute role="admin">
                <AdminLayout />
              </ProtecterRoute>
            }
          >
            <Route path="home" index element={<AdminHome />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
