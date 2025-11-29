import React, {useState} from 'react'
import outfit1 from "../assets/fit1.jpg"
import outfit2 from "../assets/fit2.jpg"
import outfit3 from "../assets/fit3.jpg"
import outfit4 from "../assets/fit4.jpg"
import outfit5 from "../assets/fit5.jpg"
import outfit6 from "../assets/fit6.jpg"
import outfit7 from "../assets/fit7.jpg"
import outfit8 from "../assets/fit8.jpg"
import outfit9 from "../assets/fit9.jpg"
import outfit10 from "../assets/fit10.jpg"

import { GoChevronDown } from 'react-icons/go'

const outfits = [
  {
      name: 'ANM',
      description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
      originalPrice: '$450.00',
      salePrice: '$418.90',
      image: outfit1,
      saleTag: 'Sale 7%',
      available: true
    },
    {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: outfit2,
        saleTag: 'Sale 7%',
        available: true
      },
      {
          name: 'ANM',
          description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
          originalPrice: '$450.00',
          salePrice: '$418.90',
          image: outfit3,
          saleTag: 'Sale 7%',
          available: true
        },
        {
            name: 'ANM',
            description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
            originalPrice: '$450.00',
            salePrice: '$418.90',
            image: outfit4,
            saleTag: 'Sale 7%',
            available: true
          },
           {
            name: 'ANM',
            description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
            originalPrice: '$450.00',
            salePrice: '$418.90',
            image: outfit5,
            saleTag: 'Sale 7%',
            available: true
          },
           {
            name: 'ANM',
            description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
            originalPrice: '$450.00',
            salePrice: '$418.90',
            image: outfit6,
            saleTag: 'Sale 7%',
            available: true
          },
           {
            name: 'ANM',
            description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
            originalPrice: '$450.00',
            salePrice: '$418.90',
            image: outfit7,
            saleTag: 'Sale 7%',
            available: true
          },
           {
            name: 'ANM',
            description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
            originalPrice: '$450.00',
            salePrice: '$418.90',
            image: outfit8,
            saleTag: 'Sale 7%',
            available: true
          },
           {
            name: 'ANM',
            description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
            originalPrice: '$450.00',
            salePrice: '$418.90',
            image: outfit9,
            saleTag: 'Sale 7%',
            available: true
          },
           {
            name: 'ANM',
            description: 'Product 1 Sample - Clothing And Accessory Boutiques For Sale',
            originalPrice: '$450.00',
            salePrice: '$418.90',
            image: outfit10,
            saleTag: 'Sale 7%',
            available: true
          },

]

const OutFitGrid = () => {

  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProducts = outfits.slice(0, visibleCount);

  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    setLoadMore(true);
    setTimeout(() => {
        setLoadMore(false);
        setVisibleCount((prev) => prev + 4);
    }, 2000);
  };


  return (
    <div className="px-4 py-10 max-w-7xl mx-auto relative">

        {/* Filter Bar */}
        <div className='relative mb-3 w-fit ml-auto'>
        <select className='appearance-none border border-gray-300 rounded px-4 pr-10 py-2 bg-white text-sm focus:outline-none cursor-pointer' defaultValue={"Featured"}>
            <option value="" disabled>Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="best-selling">Best Selling</option>
            <option value="top-rated">Top Rated</option>
            <option value="most-popular">Most Popular</option>  
        </select>
        <GoChevronDown className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        
       { /* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleProducts.map((outfit, index) => (
          <div key={index} className="relative bg-white shadow hover:shadow-lg transition-all duration-300 rounded overflow-hidden group">
            {outfit.saleTag && (
              <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 z-10">
                {outfit.saleTag}
              </div>
            )}
            {!outfit.available && (
              <div className="absolute top-0 left-0 bg-gray-600 text-white text-xs font-semibold px-2 py-1 z-10">
                <span>Sold out</span>
              </div>
            )}
            <div className='overflow-hidden'>
                <img src={outfit.image} alt={outfit.name} className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-gray-700 font-bold uppercase text-sm">{outfit.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{outfit.description}</p>
              <div className="mt-3">
                {outfit.originalPrice && (
                  <span className="text-gray-400 line-through mr-2">{outfit.originalPrice}</span>
                )}
                <span className="text-red-500 font-bold">{outfit.salePrice}</span>
              </div>
            </div>
            <button className="absolute bottom-56 left-1/2 -translate-x-1/2 w-1/2 cursor-pointer bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-20">
              {outfit.available ? 'Add to Cart' : 'Notify Me'}
            </button>
          </div>
        ))}
      </div>

      {visibleCount < outfits.length ? (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-20 py-2 bg-transparent text-gray-700 border cursor-pointer uppercase hover:bg-gray-700 transition duration-300 hover:text-white text-sm"
          >
            {loadMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      ) : (
        <div className="mt-10 text-center">
          <p className="px-4 sm:px-8 text-sm md:text-base max-w-3xl w-full mx-auto text-center text-gray-600 my-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis danos an molestie, sem in sollicitudin sodales mi justo sagittis est id consequat ipsum ligula a milance de mante...</p>
        </div>
      )}
    </div>
  )
}
export default OutFitGrid;
