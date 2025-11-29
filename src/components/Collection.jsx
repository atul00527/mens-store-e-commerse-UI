import React, {useState} from 'react'
import collectio1 from "../assets/shirt1.jpg"
import collectio2 from "../assets/shirt2.jpg"
import collectio3 from "../assets/shirt3.jpg"
import collectio4 from "../assets/shirt4.jpg"
import collectio5 from "../assets/shirt5.jpg"
import collectio6 from "../assets/shirt6.jpg"
import collectio7 from "../assets/shirt7.jpg"
import collectio8 from "../assets/shirt8.jpg"

import { GoChevronDown } from 'react-icons/go'


const collectios = [
  {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: collectio1,
        saleTag: 'Sale 7%',
        available: true
  },
  {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: collectio2,
        saleTag: 'Sale 7%',
        available: true
  },
  {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: collectio3,
        saleTag: 'Sale 7%',
        available: true
  },
  {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: collectio4,
        saleTag: 'Sale 7%',
        available: true
  },
  {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: collectio5,
        saleTag: 'Sale 7%',
        available: true
  },
  {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: collectio6,
        saleTag: 'Sale 7%',
        available: true
  },
  {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: collectio7,
        saleTag: 'Sale 7%',
        available: true
  },
  {
        name: 'ANM',
        description: 'Product 1 Sample - Clothing',
        originalPrice: '$450.00',
        salePrice: '$418.90',
        image: collectio8,
        saleTag: 'Sale 7%',
        available: true
  },
  
]

const CollectionGrid = () => {

  const [visibleCount, setVisibleCount] = useState(4);
  const visibleCollections = collectios.slice(0, visibleCount);

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
        {visibleCollections.map((collection, index) => (
          <div key={index} className="relative bg-white shadow hover:shadow-lg transition-all duration-300 rounded overflow-hidden group">
            {collection.saleTag && (
              <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 z-10">
                {collection.saleTag}
              </div>
            )}
            {!collection.available && (
              <div className="absolute top-0 left-0 bg-gray-600 text-white text-xs font-semibold px-2 py-1 z-10">
                <span>Sold out</span>
              </div>
            )}
            <div className='overflow-hidden'>
                <img src={collection.image} alt={collection.name} className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-gray-700 font-bold uppercase text-sm">{collection.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{collection.description}</p>
              <div className="mt-3">
                {collection.originalPrice && (
                  <span className="text-gray-400 line-through mr-2">{collection.originalPrice}</span>
                )}
                <span className="text-red-500 font-bold">{collection.salePrice}</span>
              </div>
            </div>
            <button className="absolute bottom-56 left-1/2 -translate-x-1/2 w-1/2 cursor-pointer bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-20">
              {collection.available ? 'Add to Cart' : 'Notify Me'}
            </button>
          </div>
        ))}
      </div>

      {visibleCount < collectios.length ? (
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
          <p className="text-gray-500">No more products to display</p>
        </div>
      )}
    </div>
  )
}


export default CollectionGrid