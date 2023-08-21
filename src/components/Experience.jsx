import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { best } from '../assets/projects'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { experiences } from '../data/data';

const Experience = () => {
    const [arrowDisplay, setArrorDisplay] = useState(true);

    return (
        <div id='experience' className='w-full h-full text-slate-50 bg-[#0a192f] flex flex-col'>
            <div className='sm:text-right mx-auto pb-8 pl-4 flex justify-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    <span className='text-xl text-slate-500 flex justify-center'>What I have done so far</span> Work Experience
                </p>
            </div>

            <div className='flex justify-center m-2 flex-col items-center'>
                {experiences.map((experience) => {
                    return (
                        <>
                            <div className="container w-[400px] xs:w-screen h-[300px] bg-[#0a192f] m-10 p-4 border-2 border-slate-600 hover:scale-105 transition-opacity">
                                <div className="title">
                                    <h1 className='text-2xl font-bold'>{experience.title}</h1>
                                    <div className="company flex justify-start gap-3 items-center">
                                        <img src={experience.icon} width={experience.icon_width} alt="" />
                                        <span className=' text-slate-300 font-bold'>{experience.company_name}</span>
                                        <span>{experience.date}</span>
                                    </div>
                                    <ul className='list-disc ml-4'>
                                        {
                                            experience.points.map((point) => (
                                                <li>{point}</li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </div>
                            {
                                arrowDisplay ?
                                    <div className="arrow rotate-90">
                                        <FaArrowAltCircleRight size={60} />
                                    </div> : ""
                            }

                        </>
                    )
                })}

            </div>

        </div>
    )
}

export default Experience