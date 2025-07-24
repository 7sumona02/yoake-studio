'use client'
import { JetBrains_Mono } from 'next/font/google'
import { useState } from 'react';
 
const jb = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
})

const page = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='min-h-screen w-screen bg-neutral-900 cursor-crosshair'>
      <div className='grid grid-cols-4'>
        <div className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative group'>
          <div className='h-full flex justify-center items-center'>
            <p className={`text-white ${jb.className} group-hover:hidden`}>YOAKE STUDIO</p>
            <p className={`text-black ${jb.className} hidden group-hover:block`}>yoake&studio@gmail.com</p>
          </div>
        </div>
        <>
      {/* Product Card */}
      <div 
        className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative cursor-pointer'
        onClick={() => setIsModalOpen(true)}
      >
        <div className='flex justify-center items-center'>
          <img src='/tshirt1.png' className='w-80' alt='product' />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white/5 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-10 border border-neutral-600 relative w-2xl h-[30rem] overflow-y-auto">         
            {/* Modal Content */}
            <div className="w-full flex flex-col gap-5">
              <div className='flex items-center justify-between'>
                <div className='font-medium text-white text-lg'>0xFFF</div>
                <div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-white bg-neutral-800 px-2 py-1 text-sm border border-neutral-600"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className={`flex-1 text-white mt-6 ${jb.className} text-sm`}>
                Not your basic tee, minimal & classy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, voluptatem!
              </div>

              <div className={`flex flex-col text-white ${jb.className} text-sm`}>
                <p>+ feature 1</p>
                <p>+ feature 2</p>
              </div>

              <div className={`mt-3 flex ${jb.className} text-sm text-white`}>
                <div className='w-56 border-y border-y-neutral-600 border-l border-l-neutral-600 py-3 px-4'>Size</div>
                <div className='w-12 border border-neutral-600 py-3 px-4 text-center'>S</div>
                <div className='flex-1 border-y border-y-neutral-600 border-r border-r-neutral-600 py-3 px-4 text-center bg-white text-black hover:bg-neutral-800 hover:text-white transition-colors'>[$500] Buy now</div>
              </div>

              <div className='mt-4 flex-1'>
                <img src='/tshirt1.png' className='w-full bg-neutral-800 border border-neutral-600 p-10' />
                <div className='flex-1 flex'>
                  <img src='/tshirt1.png' className='w-1/2 bg-neutral-800 border-x border-x-neutral-600 border-b border-b-neutral-600 p-10' />
                  <img src='/tshirt1.png' className='w-1/2 bg-neutral-800 border-r border-r-neutral-600 border-b border-b-neutral-600 p-10' />
                </div>
              </div>
             
              {/* <div className="flex-1">
                <img src='/tshirt1.png' className='w-full max-h-96 object-contain' alt='product' />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Product Title</h2>
                <p className="text-gray-700 mb-4">Product description goes here.</p>
                <p className="text-lg font-semibold">$29.99</p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>


        <div className='w-full h-84 bg-neutral-800 hover:bg-white transition-colors border-r border-b border-neutral-600 relative'>
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
    </div>
  )
}

export default page