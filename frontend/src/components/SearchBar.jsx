import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible,setVisible] = useState(false)

    const location = useLocation();

    useEffect(()=>{
           if(location.pathname.includes('/collection') && showSearch)
           {
                    setVisible(true)
           }
           else
           {
                    setVisible(false)
           }
    },[location, showSearch])

    return showSearch && visible? (
        <div className='border-t border-b bg-gray-50 text-center'>
           
            <div className="inline-flex items-center justify-center border border-gray-400 px-3 py-1.5 my-4 mx-2 rounded-full w-4/5 sm:w-2/5 sm:max-w-sm">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    placeholder="Search"
                    className="flex-1 outline-none bg-inherit text-xs px-1"
                />
                <img src={assets.search_icon} className="w-3 h-3" alt="search" />
            </div>

            <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer ' src={assets.cross_icon} alt="" />
        </div>
    ) : null
}

export default SearchBar
