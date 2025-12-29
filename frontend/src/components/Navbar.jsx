import React, { useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';



const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { showSearch, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');

    setCartItems({});
  };


  const navStyle = ({ isActive }) =>
    `py-2 pl-6 border ${isActive ? 'bg-black text-white border-none' : 'text-black bg-white border-none'}`;

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="forever-logo" className="h-10" />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="" onClick={() => (setShowSearch(!showSearch))} className='w-5 cursor-pointer ' />

        <div className="group relative">
          {/* <img onClick={token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />  */}

          <img
            onClick={() => {
              if (!token) navigate('/login');
            }}
            className='w-5 cursor-pointer'
            src={assets.profile_icon}
            alt=""
          />


          {
            token && <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className='cursor-pointer hover:text-black'>My profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Log Out</p>
              </div>
            </div>
          }
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>

        <img
          src={assets.menu_icon}
          onClick={() => { setVisible(true) }}
          className='w-5 cursor-pointer sm:hidden'
          alt=""
        />
      </div>

      {/* Sidebar menu for a smaller screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all cursor-pointer ${visible ? 'w-full' : 'w-0'}`}>


        <div className="flex flex-col text-gray-600 sidebar">
          <div onClick={() => { setVisible(false) }} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p>Back</p>
          </div>


          <NavLink onClick={() => { setVisible(false) }} className={navStyle} to="/collection">Collection</NavLink>

          <NavLink onClick={() => { setVisible(false) }} className={navStyle} to="/about">About</NavLink>

          <NavLink onClick={() => { setVisible(false) }} className={navStyle} to="/">Home</NavLink>

          <NavLink onClick={() => { setVisible(false) }} className={navStyle} to="/contact">Contact</NavLink>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
