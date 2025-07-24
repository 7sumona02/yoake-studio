'use client'
import { JetBrains_Mono } from 'next/font/google'
import { useState } from 'react';
import ProductModal from '@/components/ProductModal'
 
const jb = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
})

const products = [
  {
    id: 1,
    title: '0xFFF',
    description: 'Not your basic tee, minimal & classy. Made with premium organic cotton for ultimate comfort.',
    features: ['100% organic cotton', 'Minimalist design', 'Limited edition'],
    price: 500,
    images: ['/tshirt1.png', '/tshirt1.png', '/tshirt1.png', '/tshirt1.png']
  },
  {
    id: 2,
    title: '0x000',
    description: 'The essential black tee with perfect fit. Designed for everyday wear with premium durability.',
    features: ['Reinforced stitching', 'Pre-shrunk fabric', 'Unisex fit'],
    price: 450,
    images: ['/tshirt2.png', '/tshirt2.png', '/tshirt2.png', '/tshirt2.png']
  },
  {
    id: 3,
    title: '0x7E7',
    description: 'Vintage washed tee with distressed details. Each piece has unique wear patterns.',
    features: ['Vintage wash', 'Distressed details', 'Oversized fit'],
    price: 550,
    images: ['/tshirt3.png', '/tshirt3.png', '/tshirt3.png', '/tshirt3.png']
  },
  {
    id: 4,
    title: '0x4D4',
    description: 'Performance tee with moisture-wicking technology. Ideal for active lifestyles.',
    features: ['Moisture-wicking', 'UV protection', 'Quick dry'],
    price: 600,
    images: ['/tshirt4.png', '/tshirt4.png', '/tshirt4.png', '/tshirt4.png']
  },
  {
    id: 5,
    title: '0x2A2',
    description: 'Oversized boxy fit tee with dropped shoulders. Modern streetwear aesthetic.',
    features: ['Boxy fit', 'Dropped shoulders', 'Heavyweight fabric'],
    price: 480,
    images: ['/tshirt5.png', '/tshirt5.png', '/tshirt5.png', '/tshirt5.png']
  },
  {
    id: 6,
    title: '0x9C9',
    description: 'Cropped tee with raw edges. Edgy contemporary design with feminine touch.',
    features: ['Cropped length', 'Raw edge finish', 'Slim fit'],
    price: 520,
    images: ['/tshirt6.png', '/tshirt6.png', '/tshirt6.png', '/tshirt6.png']
  }
];

const Page = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='min-h-screen w-screen bg-neutral-900 cursor-crosshair'>
      <div className='grid grid-cols-4'>
        <div className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative group'>
          <div className='h-full flex justify-center items-center'>
            <p className={`text-white ${jb.className} group-hover:hidden`}>YOAKE STUDIO</p>
            <p className={`text-black ${jb.className} hidden group-hover:block`}>yoake&studio@gmail.com</p>
          </div>
        </div>
        
        {/* Product 1 */}
        <div 
          className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative cursor-pointer'
          onClick={() => handleProductClick(products[0])}
        >
          <div className='h-full flex justify-center items-center'>
            <img src='/tshirt1.png' className='w-80' alt='product' />
          </div>
        </div>

        {/* Product 2 */}
        <div 
          className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative cursor-pointer'
          onClick={() => handleProductClick(products[1])}
        >
          <div className='h-full flex justify-center items-center'>
            <img src='/tshirt2.png' className='w-80' alt='product' />
          </div>
        </div>

        <div className='w-full h-84 bg-neutral-800 border-r border-b border-neutral-600 relative'>
          <div className='h-full flex justify-center items-center'>
            <input 
              type="text" 
              placeholder="Enter your text here" 
              className={`text-center px-4 py-2 placeholder-neutral-400 focus:outline-none focus:ring-0 text-white ${jb.className} text-sm`}
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4'>
        <div className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative group'
        onClick={() => handleProductClick(products[2])}>
          <div className='h-full flex justify-center items-center'>
            <img src='/tshirt3.png' className='w-60' alt='product' />
          </div>
        </div>
        
        <div 
          className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative cursor-pointer'
          onClick={() => handleProductClick(products[3])}
        >
          <div className='h-full flex justify-center items-center'>
            <img src='/tshirt4.png' className='w-80' alt='product' />
          </div>
        </div>

        <div 
          className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative cursor-pointer'
          onClick={() => handleProductClick(products[4])}
        >
          <div className='h-full flex justify-center items-center'>
            <img src='/tshirt5.png' className='w-80' alt='product' />
          </div>
        </div>

        <div className='w-full h-84 bg-neutral-800 border-r border-b border-neutral-600 relative'
        onClick={() => handleProductClick(products[5])}>
          <div className='h-full flex justify-center items-center'>
            <img src='/tshirt6.png' className='w-80' alt='product' />
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
    </div>
  )
}

export default Page;