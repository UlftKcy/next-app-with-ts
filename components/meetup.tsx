import React from 'react'
import { IMeetup } from '../types';

const Meetup = (meetup: IMeetup) => {
    return (
        <div className='w-1/3 h-1/3 group relative my-10 mx-auto p-2 font-mono'>
            <div className='w-full group-hover:opacity-50'>
                <img className='object-cover rounded-t-2xl' src={meetup.image.src} alt={meetup.title} />
                <div className='flex flex-col justify-center h-28 bg-indigo-900 text-white px-5 rounded-b-2xl'>
                    <h4 className='font-extrabold text-xl mb-2 tracking-wide'>{meetup.title}</h4>
                    <span className='font-light mb-1'>{meetup.description}</span>
                    <span className='font-light text-xs text-opacity-30 text-right'>{meetup.address}</span>
                </div>
            </div>
            <div className='absolute z-10 inset-y-1/2 w-full h-0 flex justify-center items-center group-hover:opacity-100 opacity-0'>
                <button className='border border-indigo-800 bg-gray-300 text-indigo-700 ring ring-indigo-400 font-bold py-2 px-10 rounded-md'>Go to meetup</button>
            </div>
        </div>
    )
}
export default Meetup;