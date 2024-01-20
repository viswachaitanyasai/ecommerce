import React from "react";
import { Routes,Route } from "react-router-dom";
import {Homepage, About,Contact,Policy,PageNotFound, Register, Login, Dashboard, ForgotPassword, AdminDashboard, CreateCategory, CreateProduct, Users , Profile, Orders, Products} from "./pages/pages";
import PrivateRoute from "./components/routes/Private";
import AdminRoute from "./components/routes/AdminRoute";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>

          <Route path="/dashboard" element={<PrivateRoute/>}>
              <Route path="user" element={<Dashboard/>}/>
              <Route path="user/profile" element={<Profile/>}/>
              <Route path="user/orders" element={<Orders/>}/>
          </Route>

          <Route path="/dashboard" element={<AdminRoute/>}>
              <Route path="admin" element={<AdminDashboard/>}/>
              <Route path="admin/create-category" element={<CreateCategory/>}/>
              <Route path="admin/create-product" element={<CreateProduct/>}/>
              <Route path="admin/products" element={<Products/>}/>
              <Route path="admin/users" element={<Users/>}/>
          </Route>

          <Route path="/register" element={<Register/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
