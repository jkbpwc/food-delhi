import { useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";


const Navbar = ({setIsLogin}) =>{
    const {subTotal} = useContext(StoreContext);
    return (
    <>
        <div className="bg-[#f4cd8c7a] backdrop-blur-md p-4 flex justify-between items-center h-[120px] shadow-lg sticky top-0 z-10">
            <Link to='/'><img src={assets.logo} className="h-8"/></Link>
            <div className="flex flex-row gap-8 text-[20px] font-medium h-[40px]">
                <Link to="/" className="hover:border-b-2 pb-2 border-b-orange-500 cursor-pointer">Home</Link>
                <a href="#menu" className="hover:border-b-2 pb-2 border-b-orange-500 cursor-pointer">Menu</a>
                <a href="#mobile-app" className="hover:border-b-2 pb-2 border-b-orange-500 cursor-pointer">Mobile-app</a>
                <a href="#contact" className="hover:border-b-2 pb-2 border-b-orange-500 cursor-pointer">Contact Us</a>
            </div>
            <div className="flex flex-row w-max h-8 gap-4 items-center">
                <img src={assets.search_icon}></img>
                <Link to="/cart"><img src={assets.basket_icon} className={`${subTotal()!=0 ? 'animate-bounce' : ''}`}/></Link>
                <button onClick={()=>setIsLogin(true)} className="bg-transparent !border-2 !border-orange-500 !rounded-[20px] px-6 py-2 hover:bg-orange-200 transition duration-500">sign-in</button>
            </div>
        </div>
    </>
    )
}
export default Navbar;