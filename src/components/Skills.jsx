import React from 'react';

import { skills } from '../data/data';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-full  z-0 bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'> These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-9 mb-96'>
                    {skills.map((item) => {
                        return (
                            <>
                                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                    <img className='w-20 mx-auto' src={item.image} alt="HTML icon" />
                                    <p className='my-4'>{item.title}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            {/* <div className='bg-[#0a192f] h-52 sm:h-52'>
                <div className='bg-[#0a192f] h-52'>

                </div>
            </div> */}
        </div>
    );
};

export default Skills;
