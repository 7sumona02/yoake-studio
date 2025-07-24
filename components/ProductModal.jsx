'use client'
import { JetBrains_Mono } from 'next/font/google'
import { useEffect } from 'react';

const jb = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
})

const ProductModal = ({ isOpen, onClose, product }) => {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-white/5 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close when clicking on backdrop
    >
      <div 
        className="bg-black p-10 border border-neutral-600 relative w-2xl h-[30rem] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop
      >         
        {/* Modal Content */}
        <div className="w-full flex flex-col gap-5">
          <div className='flex items-center justify-between'>
            <div className='font-medium text-white text-lg'>{product.title}</div>
            <div>
              <button 
                onClick={onClose}
                className="text-white bg-neutral-800 hover:bg-white hover:text-black transition-colors px-2 py-1 text-sm border border-neutral-600"
              >
                Close
              </button>
            </div>
          </div>

          <div className={`flex-1 text-white mt-6 ${jb.className} text-sm`}>
            {product.description}
          </div>

          <div className={`flex flex-col text-white ${jb.className} text-sm`}>
            {product.features.map((feature, index) => (
              <p key={index}>+ {feature}</p>
            ))}
          </div>

          <div className={`mt-3 flex ${jb.className} text-sm text-white`}>
            <div className='w-56 border-y border-y-neutral-600 border-l border-l-neutral-600 py-3 px-4'>Size</div>
            <div className='w-12 border border-neutral-600 py-3 px-4 text-center'>S</div>
            <div className='flex-1 border-y border-y-neutral-600 border-r border-r-neutral-600 py-3 px-4 text-center bg-white text-black hover:bg-neutral-800 hover:text-white transition-colors'>
              [${product.price}.00] Buy now
            </div>
          </div>

          <div className='mt-4 flex-1'>
            <img src={product.images[0]} className='w-full bg-neutral-800 border border-neutral-600 p-6' alt={product.title} />
            <div className='flex-1 flex'>
              <img src={product.images[1] || product.images[0]} className='w-1/2 bg-neutral-800 border-x border-x-neutral-600 border-b border-b-neutral-600 p-4' alt={product.title} />
              <img src={product.images[2] || product.images[0]} className='w-1/2 bg-neutral-800 border-r border-r-neutral-600 border-b border-b-neutral-600 p-4' alt={product.title} />
            </div>
            <img src={product.images[3]} className='w-full bg-neutral-800 border-x border-x-neutral-600 border-b border-b-neutral-600 p-6' alt={product.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;