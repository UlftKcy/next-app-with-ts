import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <header className='bg-indigo-900 text-white px-5 py-3'>
            <div className="container flex justify-between items-center">
                <div className='font-bold tracking-wide text-lg'>
                    <Link href="/">React Meetups</Link>
                </div>
                <div className='hidden sm:block'>
                    <ul className='flex'>
                        <li className='mr-5'>
                            <Link href="">All Meetups</Link>
                        </li>
                        <li>
                            <Link href="">Add New Meetup</Link>
                        </li>
                    </ul>
                </div>
                <div className='block sm:hidden'>
                    <span className='block w-7 h-1 rounded bg-white mb-1'></span>
                    <span className='block w-7 h-1 rounded bg-white mb-1'></span>
                    <span className='block w-7 h-1 rounded bg-white'></span>
                </div>
            </div>
        </header>
    )
}

export default Header;