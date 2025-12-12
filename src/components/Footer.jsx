import React, {useState} from "react"
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTiktok, FaTimes} from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";

const FooterSection = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-auto mb-6 md:mb-0">
      <div
        className="flex justify-between items-center md:block cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-white font-semibold uppercase tracking-wide text-sm mb-2 md:mb-4">
          {title}
        </h3>
        <span className="text-white md:hidden">{isOpen ? <HiMinus /> : <GoPlus />}</span>
      </div>
      <ul
        className={`md:block ${isOpen ? 'block' : 'hidden'} text-sm text-gray-400 space-y-2`}
      >
        {links.map((link, idx) => (
          <li key={idx} className="hover:text-white cursor-pointer">{link}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
     <footer className="bg-black text-white text-sm px-6 py-12 mt-36">
      
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <FooterSection
            title="Shop"
            links={[
              'New In', 'Women', 'Men', 'Shoes',
              'Bags & Accessories', 'Top Brands', 'Sale & Special Offers'
            ]}
          />
          <FooterSection
            title="Information"
            links={[ 'About', 'Blog' ]}
          />
          <FooterSection
            title="Customer Service"
            links={[
              'Search Terms', 'Advanced Search', 'Orders And Returns',
              'Contact Us', 'Theme FAQs', 'Consultant', 'Store Locations'
            ]}
          />
          <div className="w-full md:w-auto">
            <h3 className="text-white font-semibold uppercase tracking-wide text-sm mb-2 md:mb-4">
              Newsletter Sign Up
            </h3>
            <p className="text-gray-400 mb-4">
              Sign up for exclusive updates, new arrivals & insider only discounts
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="enter your email address"
                className="px-4 py-2 flex-1 border border-gray-700 bg-black text-white placeholder-gray-500"
              />
              <button className="bg-white text-black font-semibold px-4 cursor-pointer">SUBMIT</button>
            </div>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="bg-white text-black rounded-full p-2 w-8 h-8 cursor-pointer" />
              <FaInstagram className="bg-white text-black rounded-full p-2 w-8 h-8 cursor-pointer" />
              <FaPinterestP className="bg-white text-black rounded-full p-2 w-8 h-8 cursor-pointer" />
              <FaTiktok className="bg-white text-black rounded-full p-2 w-8 h-8 cursor-pointer" />
              <FaYoutube className="bg-white text-black rounded-full p-2 w-8 h-8 cursor-pointer" />
              <FaTimes className="bg-white text-black rounded-full p-2 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}, Website Demo. All Rights Reserved. Themes By Atul Maurya
          </p>
        </div>
      
    </footer>
  )
}


export default Footer
