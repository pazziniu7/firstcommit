import React from 'react';
import illustration from '../assets/images/illustration-intro.svg';


const HerosSection = () => {
    return (
        <>
            <div className='w-full my-4'>
                <div className="mx-auto w-10/12">
                    <div className='grid lg:space-x-3 lg:grid-cols-2'>
                        <div>
                            <h3 className='text-[#232E4F] text-4xl font-bold'>
                                Bring everyone <br/> 
                                together to build <br />
                                better products.
                            </h3>

                            <p className='text-gray-300 my-6'>
                                Manage makes it easy for software teams <br /> 
                                to plan day-to-day task while keeping the <br />
                                larger team goals in view. 
                            </p>

                            <button className="bg-[#F3613C] my-4 text-white px-6 py-2 rounded-3xl shadow-sm">
                                Get Started
                            </button>
                        </div>

                        <div>
                            <img src={illustration} width="80%" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HerosSection;