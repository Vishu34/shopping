import { useEffect, useState } from 'react';
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai'

import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { Nav } from 'react-bootstrap';
import { useWishContext } from '../Context/WishContext';
const Desktopnav=()=>{
    const {Total_items}=useCartContext()
    const{totalwish}=useWishContext()
    const[top,settop]=useState();

     const topnav=()=>{
        if(window.scrollY>300){
            settop(true)
        }
        else{
            settop(false)
        }
     }
    useEffect(()=>{
window.addEventListener('scroll',topnav)
    },[])
    return(
        <>
        <section  className={`bg-white py-2  z-50 w-[100%] d-none d-md-block ${top ? `fixed top-0 w-[100%]` : `static`}`}>
            <div className="flex justify-between items-center px-8 md:px-16 xl:px-32">
                <div className="">
                    <img src="/navbar/logo.svg" alt="img" className='w-44'/>
                </div>

                <div className="">
                   <ul className="flex md:space-x-5  lg:space-x-9 items-center font-bold">
                        <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/about">About</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/product">Products</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/contact">Contacts</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/login">Login</NavLink>
                       <NavLink  className={({isActive})=> (isActive? `active p-1 `: `inactive p-1`)} to="/wishlist"> <li className='relative'><AiOutlineHeart className='text-lg font-bold'/> <p className="absolute -top-2 -right-3 bg-red-500 w-4 h-4 flex items-center justify-center p-2 rounded-full text-white font-bold text-xs">{totalwish}</p></li></NavLink>
                         <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/cart"><li className='relative'><AiOutlineShoppingCart className='text-lg font-bold'/> <p className="absolute -top-2 -right-3 bg-red-500 w-4 h-4 flex items-center justify-center p-2 rounded-full text-white font-bold text-xs">{Total_items}</p></li></NavLink>
                   </ul>
                </div>
            </div>
        </section>
        </>
    )
}
export default Desktopnav;