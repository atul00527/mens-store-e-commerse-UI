import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { IoIosMenu, IoMdClose } from "react-icons/io";

// import Shopping Cart
import ShoppingCart from './ShoppingCart';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
   const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  }; 
  return  <>
      
      <header className='flex justify-between items-center px-6 py-4 bg-transparent text-black uppercase'>
          <a href='' className='text-4xl font-bold'>Men's Store</a>

          {/* Mobile menu button */}
        <button
            className="lg:hidden flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer"
            onClick={() => toggleMenu('mobile')}
        >
            <IoIosMenu className="text-3xl" />
        </button>
        
        <nav className='hidden lg:block relative'>
          <ul className='flex gap-9 font-medium'>
            <li className='cursor-pointer hover:text-gray-600'>Home</li>
            <li className='group relative cursor-pointer'>
                <span className='hover:text-gray-600'>Shop</span>

                  <ul className='absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg invisibal opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                    <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Shose</li>
                    <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Wactch</li>
                    <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Braclet</li>
                    <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Chain</li>

                    <li className='relative group/submenu'>
                      <span className='px-4 py-2 hover:bg-gray-100 hover:text-gray-600 flex item-center justify-between alian items-center'>Mens-Outfit <MdChevronRight /></span>
                  
                      <ul className='absolute left-full top-0 ml-1 w-44 bg-white text-black rounded-md shadow-lg 
                        opacity-0 group-hover/submenu:opacity-100 invisible group-hover/submenu:visible transition-all duration-300 z-50'>
                        <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Pant</li>
                        <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Shirt</li>
                        <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>T-shirt</li>
                      </ul>
                    </li>
                  </ul>
              </li>
            <li className='group relative cursor-pointer'>
                <span className='hover:text-gray-600'>Collections</span>

                  <ul className='absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg invisibal opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                    <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Workwere</li>
                    <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Streatwere</li>
                    <li className='px-4 py-2 hover:bg-gray-600 hover:text-gray-50 rounded-b-lg'>Essentials</li>
                  </ul>
              </li>
            <li className='hover:text-gray-600 cursor-pointer'>Store</li>
            <li className='hover:text-gray-600 cursor-pointer'>Contact</li>
          </ul>
        </nav>
 {/* mobile Navigatin */}
        {openMenu === 'mobile' && (
            <nav className="lg:hidden fixed inset-0 bg-gray-950 z-50 flex flex-col">
                <div className="bg-white w-3/4 max-w-xs h-full p-6 shadow-lg overflow-y-auto">
                    <button
                        className="flex items-center px-2 py-1 border rounded text-black border-gray-400 cursor-pointer mb-6"
                        onClick={() => setOpenMenu(null)}
                    >
                        <IoMdClose className="text-3xl" />
                    </button>
                    <ul className="flex flex-col gap-4 font-medium">
                        <li className="cursor-pointer hover:text-gray-700">Home</li>
                        {/* SHOP DROPDOWN */}
                        <li>
                            <details>
                                <summary className="cursor-pointer hover:text-gray-700">Men's Outfit</summary>
                                <ul className="ml-4 mt-2 flex flex-col gap-2">
                                    <li className="hover:text-gray-700 cursor-pointer">Pant</li>
                                    <li className="hover:text-gray-700 cursor-pointer">Shirt</li>
                                    <li className="hover:text-gray-700 cursor-pointer">T-Shirt</li>
                                    
                                </ul>
                            </details>
                        </li>
                        {/* COLLECTIONS DROPDOWN */}
                        <li>
                            <details>
                                <summary className="cursor-pointer hover:text-gray-700">Collections</summary>
                                <ul className="ml-4 mt-2 flex flex-col gap-2">
                                    <li className="hover:text-gray-700 cursor-pointer">Essentials</li>
                                    <li className="hover:text-gray-700 cursor-pointer">Streetwear</li>
                                    <li className="hover:text-gray-700 cursor-pointer">Workwear</li>
                                </ul>
                            </details>
                        </li>                       
                        <li className="cursor-pointer hover:text-gray-700">Contact</li>
                    </ul>
                    <div className="mt-8 flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-1 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-700" />
                        <button className="px-6 py-3 bg-gray-700 cursor-pointer rounded-full text-white font-semibold  hover:bg-gray-900 transition duration-300">Create an Account</button>
                    </div>
                </div>
            </nav>
        )}

        <div className='hidden lg:flex items-center gap-4'>
          <input type='text' placeholder='Search......' className='px-3 py-1 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-700' />
          <span onClick={() => setIsCartOpen(true)} className='text-xl cursor-pointer'> <IoCartOutline className='text-gray-900 hover:text-gray-500 text-2xl' /></span>
          <button className='px-6 py-3 bg-gray-600 cursor-pointer rounded-full text-white font-semibold hover:bg-gray-900'>Create an Acccount</button>
        </div>


      </header>
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
  
  
  </>

}

export default Header;
