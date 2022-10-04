import React from 'react';
import { meetups } from '../utils/meetups';
import { IMeetup } from '../types';

const Meetuplist = () => {
    return (
        <>
            {React.Children.toArray(meetups.map((meetup: IMeetup) => (
                <></>
            )))}
        </>
    )
}

export default Meetuplist;