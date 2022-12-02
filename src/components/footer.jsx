import React from 'react';
//icons
import logo from '../assets/images/logo.svg';
import facebook from '../assets/images/icon-facebook.svg';
import youtube from '../assets/images/icon-youtube.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pintrest from '../assets/images/icon-pinterest.svg';
import insta from '../assets/images/icon-instagram.svg';


const Footer = () => {
    return (
        <>
            <div className="w-full bg-[#1E1E26] py-8">
                <div className="mx-auto w-10/12">
                    <div className='flex justify-between'>
                        <div>
                            <div className='mt-4 mb-12'>
                                <img src={logo} width="80%" alt="logo" />
                            </div>
                            <div className='flex justify-between'>
                                <div className='mx-1'>
                                    <img src={facebook} width="80%" alt="logo" />
                                </div>
                                <div className='mx-1'>
                                    <img src={youtube} width="80%" alt="logo" />
                                </div>
                                <div className='mx-1'>
                                    <img src={twitter} width="80%" alt="logo" />
                                </div>
                                <div className='mx-1'>
                                    <img src={pintrest} width="80%" alt="logo" />
                                </div>
                                <div className='mx-1'>
                                    <img src={insta} width="80%" alt="logo" />
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between text-[#FAFAFA]'>
                                <div className='mx-4'>
                                    <ul className='list'>
                                        <li className='my-2'>Home</li>
                                        <li className='my-2'>Pricing</li>
                                        <li className='my-2'>Products</li>
                                        <li className='my-2'>About Us</li>
                                    </ul>
                                </div>
                                <div className='mx-4'>
                                    <ul className='list'>
                                        <li className='my-2'>Careers</li>
                                        <li className='my-2'>Community</li>
                                        <li className='my-2'>Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <input type="text" className='mx-2 bg-white rounded-3xl py-2 px-4' placeholder='updates in your inbox...' />
                                <button className="bg-[#F3613C] text-white px-4 py-2 rounded-3xl shadow-sm">
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;