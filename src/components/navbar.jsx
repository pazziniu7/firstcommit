import React from 'react';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
    return (
        <>
            <div className='w-full py-4'>
                <div className="mx-auto w-10/12">
                    <div className="flex justify-between">
                        <div>
                            <img src={logo} width="80%" alt="logo" />
                        </div>
                        <div>
                            <div className='flex between'>
                                <div className='mx-2'>
                                    <a href="/" className='' >Pricing</a>
                                </div>
                                <div className='mx-2'>
                                    <a href="/" className=''>Product</a>
                                </div>
                                <div className='mx-2'>
                                    <a href="/" className=''>About Us</a>
                                </div>
                                <div className='mx-2'>
                                    <a href="/" className=''>Careers</a>
                                </div>
                                <div className='mx-2'>
                                    <a href="/" className=''>Community</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="bg-[#F3613C] text-white px-6 py-2 rounded-3xl shadow-sm">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;