import React, { FC, ReactElement } from 'react';
import { meetups } from '../utils/meetups';
import { IMeetup } from '../types';
import Meetup from './meetup';

const Meetuplist:FC<IMeetup> = (props) => {
    return (
        <>
            {React.Children.toArray(meetups.map((meetup: IMeetup):ReactElement => (
                <Meetup {...meetup}/>
            )))}
        </>
    )
}

export default Meetuplist;