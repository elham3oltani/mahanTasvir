import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login_signUp/Login";
import SignUp from "./components/login_signUp/SignUp";
import RestorePassword from "./components/login_signUp/RestorePassword";
import SendEmail from "./components/login_signUp/RestorePass";
import DetailProduct from "./components/productDetail/DetailProduct";
import AboutUs from "./components/AboutUs";
import Products from "./components/products/Products";
import Footer from "./components/shared/Footer";
import UserPannel from "./components/userPannel/UserPannel";
import Dashboard from "./components/userPannel/Dashboard";
import Orders from "./components/userPannel/Orders";
import AddtoFavorite from "./components/userPannel/AddtoFavorite";
import InfoUser from "./components/userPannel/InfoUser";
import EditUser from "./components/userPannel/EditUser";
import ShopCart from "./components/shopCart/ShopCart";
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import Introduction from "./components/productDetail/Introduction";
import ProductSpec from "./components/productDetail/ProductSpec";
import VerifyCode from "./components/login_signUp/VerifyCode";
import RestorePass from "./components/login_signUp/RestorePass";
import NotFound from "./components/NotFound";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="app">
      <ProductContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="reset/pass" element={<RestorePassword />} />
            <Route path="send/email" element={<SendEmail />} />
            <Route path="product/single/:id" element={<DetailProduct />} />
            <Route path="Introduction" index element={<Introduction />} />
            <Route path="ProductSpec" element={<ProductSpec />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/product/:slug" element={<Products />} />
            <Route path="/my-account/" element={<UserPannel />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="myOrders" element={<Orders />} />
              <Route path="AddtoFavorite" element={<AddtoFavorite />} />
              <Route path="info-account" index element={<InfoUser />} />
              <Route path="edit-account" element={<EditUser />} />
            </Route>
            <Route path="/shopcart" element={<ShopCart />} />
            <Route path="verify_code" element={<VerifyCode />} />
            <Route path="reset_pass" element={<RestorePass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      <Footer />
      </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}
export default App;
