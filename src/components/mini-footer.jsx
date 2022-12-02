import React from 'react';

const MiniFooter = () => {
    return (
        <>
            <div className='w-full bg-[#F3613C] h-max py-8 text-white'>
                <div className="mx-auto w-10/12">
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl'>Simplify how your team <br /> works today.</h3>
                        </div>
                        <div>
                            <button className="bg-white text-[#F3613C] px-3 sm:px-4 md:px-4 lg:px-6 py-2 rounded-3xl shadow-sm">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MiniFooter;