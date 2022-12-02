import React from 'react';

import ali from '../assets/images/avatar-ali.png';
import anisha from '../assets/images/avatar-anisha.png';
import richard from '../assets/images/avatar-richard.png';

const ClientSection = () => {
    return (
        <>
            <div className='w-full my-4'>
                <div className='text-center my-16'>
                    <h3 className='text-[#232E4F] text-2xl font-semibold'>
                        What they've said
                    </h3> 
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
                lg:space-x-4 lg:space-y-6 md:space-x-4 sm:space-x-3'>

                    <div className='mx-4 my-8'>
                        <div className='relative'>
                            <div className='bg-[#FAFAFA] relative p-4'>
                                <div className='absolute -top-5 left-[43%]'>
                                    <img src={anisha} width="50px" height="50px" className="rounded-full" alt="profile" />
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-[#232E4F] text-2xl font-semibold my-4'>
                                        Anisha Li
                                    </h3> 

                                    <p className='text-gray-300 my-6'>
                                        "Manage has supercharged our teams workflow. They maintain visibility 
                                        on larger milestones at all times, Keeps everyone motivated."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mx-4 my-8'>
                        <div className='relative'>
                            <div className='bg-[#FAFAFA] relative p-4'>
                                <div className='absolute -top-5 left-[43%]'>
                                    <img src={ali} width="50px" height="50px" className="rounded-full" alt="profile" />
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-[#232E4F] text-2xl font-semibold my-4'>
                                        Ali Bravo
                                    </h3> 

                                    <p className='text-gray-300 my-6'>
                                        "Manage has supercharged our teams workflow. They maintain visibility 
                                        on larger milestones at all times, Keeps everyone motivated."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mx-4 my-8'>
                        <div className='relative'>
                            <div className='bg-[#FAFAFA] relative p-4'>
                                <div className='absolute -top-5 left-[43%]'>
                                    <img src={richard} width="50px" height="50px" className="rounded-full" alt="profile" />
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-[#232E4F] text-2xl font-semibold my-4'>
                                        Richard Watts
                                    </h3> 

                                    <p className='text-gray-300 my-6'>
                                        "Manage has supercharged our teams workflow. They maintain visibility 
                                        on larger milestones at all times, Keeps everyone motivated."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
             
                </div>

                <div className='text-center my-16'>
                    <button className="bg-[#F3613C] text-white px-6 py-2 rounded-3xl shadow-sm">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}

export default ClientSection;