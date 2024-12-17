import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginModal from "./components/LoginModal";
import { NextUIProvider } from "@nextui-org/system";
import InputMask from 'react-input-mask';
import {IMaskInput} from 'react-imask';


function App() {
  const [isLogin,setIsLogin]=useState(false);
  return (
    <>
    <NextUIProvider>
      <Navbar setIsLogin={setIsLogin}/>
      <LoginModal isLogin={isLogin} setIsLogin={setIsLogin}/>
      <IMaskInput
                mask={['0.0000000.000',/^[a-zA-Z0-9]{0,11}$/]}
                unmask={true} 
                placeholder='1.2345678.901'
                onAccept={
                  (value, mask) => console.log(value.length,typeof(value))
                }
              />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer/>
      </NextUIProvider>
    </>
  );
}

export default App;
