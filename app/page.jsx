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
    description: 'Not your basic tee, minimal & classy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, voluptatem!',
    features: ['feature 1', 'feature 2'],
    price: 500,
    images: ['/tshirt1.png', '/tshirt1.png', '/tshirt1.png', '/tshirt1.png']
  },
  {
    id: 2,
    title: '0x000',
    description: 'Another awesome tee with unique features. Perfect for any occasion.',
    features: ['premium fabric', 'limited edition'],
    price: 450,
    images: ['/tshirt2.png', '/tshirt2.png', '/tshirt2.png', '/tshirt2.png']
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
          <div className='flex justify-center items-center'>
            <img src='/tshirt1.png' className='w-80' alt='product' />
          </div>
        </div>

        {/* Product 2 */}
        <div 
          className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative cursor-pointer'
          onClick={() => handleProductClick(products[1])}
        >
          <div className='flex justify-center items-center'>
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

      <ProductModal
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
    </div>
  )
}

export default Page;