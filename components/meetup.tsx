import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { IMeetup } from '../types';

const Meetup: FC<IMeetup> = (meetup) => {
    const router = useRouter();
    const showMeetupHandler = () => {
        router.push("/" + meetup.id);
    };
    return (
        <div className='m-12'>
            <div className='mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-md'>
                <div className='sm:flex h-full'>
                    <div className='sm:shrink-0'>
                        <img className='object-cover h-40 w-full sm:h-full sm:w-40' src={meetup.image.src} alt={meetup.title} />
                    </div>
                    <div className='p-8'>
                        <div className='text-xs font-semibold uppercase tracking-wide text-sky-400'>
                            {meetup.address}
                        </div>
                        <a onClick={showMeetupHandler} className='mt-1 block text-lg font-medium leading-tight text-black cursor-pointer hover:underline'>
                            <h4 className='font-extrabold text-xl mb-2 tracking-wide'>{meetup.title}</h4>
                        </a>
                        <div className='font-bold tracking-wide'>
                            <span className='font-light text-sm text-right'>{meetup.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Meetup;