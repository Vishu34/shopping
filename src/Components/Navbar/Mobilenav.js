import { useEffect, useState } from 'react';
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai'
import { FaList, FaTimes } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
const Mobilenav=()=>{

    const [nav,setnav]=useState(false)
    const[top,settop]=useState()

    const topnav=()=>{
        if(window.scrollY>150){
               settop(true)
        }else{
            settop(false)
        }
    }
    useEffect(()=>{
     window.addEventListener('scroll',topnav)
    },[])
    return(
        <>
        <section  className={`bg-white py-2  z-50 w-[100%] d-md-none ${top ? `fixed top-0 w-[100%] `:`static`}`}>
            <div className="flex justify-between items-center px-8 md:px-16 xl:px-32">
                <div className="">
                    <img src="/navbar/logo.svg" alt="img" className='w-36'/>
                </div>

                <div className="">
                 
                   {
                    nav ? (
                        <motion.div 
                        initial={{x:500}}
                        animate={{x:0}}
                        transition={{duration:0.5,stiffness:300}}

                        className=" first-slide p-4 fixed top-0 right-0 w-[100%] h-[100%] z-50">
         <ul className=" space-y-8  font-bold text-left">
                        <li className=' flex justify-end'><FaTimes className="text-lg cursor-pointer" onClick={()=>setnav(false)}/></li>
                      <ul 
                   
                      className="space-y-8">
                      <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={()=>setnav(false)} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={()=>setnav(false)} to="/about">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={()=>setnav(false)} to="/product">Products</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={()=>setnav(false)} to="/contact">Contacts</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')}  onClick={()=>setnav(false)} to="/login">Login</NavLink></li>
                     
                       <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/wishlist" onClick={()=>setnav(false)}>  <li><AiOutlineHeart className='text-2xl font-bold'/></li></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active p-1' : 'inactive p-1')} to="/cart" onClick={()=>setnav(false)}> <li><AiOutlineShoppingCart className='text-2xl font-bold'/></li></NavLink>
                        </ul>
                   </ul> 
         </motion.div>
                    ): <FaList className="text-lg cursor-pointer"  onClick={()=>setnav(true)}/>
                   }
                  
                </div>
            </div>
        </section>
       
        </>
    )
}
export default Mobilenav;



