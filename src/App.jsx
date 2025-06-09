import "./assets1/tailwind.css";

import { Routes, Route } from "react-router-dom";
// import Customers from "./pages/Customers.jsx";
// import Orders from "./pages/Orders.jsx";
// import NotFound from "./pages/NotFound.jsx";
// import Forbidden from "./pages/Forbidden.jsx";
// import BadRequest from "./pages/BadRequest.jsx";
// import Unauthorized from "./pages/Unauthorized.jsx";
// import MainLayout from "./layouts/MainLayout.jsx";
// import Login from "./pages/auth/Login.jsx";
// import Register from "./pages/auth/Register.jsx";
// import Forgot from "./pages/auth/Register.jsx";
// import AuthLayout from "./layouts/AuthLayouts.jsx";
// import Loading from "./components/Loading.jsx";
import { Suspense } from "react";

import React from "react";
import Products from "./pages/Products.jsx";

const Customers = React.lazy(() => import("./pages/Customers.jsx"));
const User = React.lazy(() => import("./pages/User.jsx"));
const Orders = React.lazy(() => import("./pages/Orders.jsx"));
const Dashboard = React.lazy(() => import("./pages/Dashboard.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));
const Forbidden = React.lazy(() => import("./pages/Forbidden.jsx"));
const BadRequest = React.lazy(() => import("./pages/BadRequest.jsx"));
const Unauthorized = React.lazy(() => import("./pages/Unauthorized.jsx"));
const Login = React.lazy(() => import("./pages/auth/Login.jsx"));
const Register = React.lazy(() => import("./pages/auth/Register.jsx"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot.jsx"));
// const Products = React.lazy(() => import("./pages/auth/Products.jsx"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayouts.jsx"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout.jsx"));
const Loading = React.lazy(() => import("./components/Loading.jsx"));
const ProductDetail = React.lazy(() => import("./pages/Productdetail"))
const Notes = React.lazy(() => import("./pages/Notes.jsx"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="Foods" element={<Unauthorized />} />
        <Route path="Riviews" element={<BadRequest />} />
        <Route path="Orders Detail" element={<Forbidden />} />

        <Route element={<MainLayout />}>
          <Route path="User" element={<User />} />
          <Route path="products" element={<Products />} />
          <Route path="Products/:id" element={<ProductDetail />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/notes" element={<Notes />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/Loading" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
