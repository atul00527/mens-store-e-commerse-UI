import React from 'react'

import shoes1 from "../assets/shoes1.jpg"
import shoes2 from "../assets/shoes2.jpg"
import shoes3 from "../assets/shoes3.jpg"
import shoes4 from "../assets/shoes4.jpg"
import shoes5 from "../assets/shoes5.jpg"
import shoes6 from "../assets/shoes6.jpg"


const Item = () => {

const items = [
    {
    image: shoes1,
    hashtag: '#MILANCE',
    text: 'Quisquemos sodales suscipit ditaemcos lorem de cosmo lacus meleifend menean...'
  },
  {
    image: shoes2,
    hashtag: '#CONVALIS',
    text: 'Quisquemos sodales suscipit ditaemcos lorem de cosmo lacus meleifend menean...'
  },
  {
    image: shoes3,
    hashtag: '#CONVALIS',
    text: 'Quisquemos sodales suscipit ditaemcos lorem de cosmo lacus meleifend menean...'
  },
  {
    image: shoes4,
    hashtag: '#CONVALIS',
    text: 'Quisquemos sodales suscipit ditaemcos lorem de cosmo lacus meleifend menean...'
  },
  {
    image: shoes5,
    hashtag: '#CONVALIS',
    text: 'Quisquemos sodales suscipit ditaemcos lorem de cosmo lacus meleifend menean...'
  },
  {
    image: shoes6,
    hashtag: '#CONVALIS',
    text: 'Quisquemos sodales suscipit ditaemcos lorem de cosmo lacus meleifend menean...'
  },

];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-12 px-8">
            
            <img
                src={items[0].image}
                alt="model-1"
                className="md:w-72 w-full h-auto object-cover"
            />

            
            <img
                src={items[1].image}
                alt="model-2"
                className="md:w-72 w-full h-auto object-cover"
            />           
            <img
                src={items[2].image}
                alt="model-1"
                className="md:w-72 w-full h-auto object-cover"
            />

            
            <img
                src={items[3].image}
                alt="model-2"
                className="md:w-72 w-full h-auto object-cover"
            />           
            <img
                src={items[4].image}
                alt="model-1"
                className="md:w-72 w-full h-auto object-cover"
            />

            
            <img
                src={items[5].image}
                alt="model-2"
                className="md:w-72 w-full h-auto object-cover"
            />           
                       
    </div>
  )
}

export default Item
