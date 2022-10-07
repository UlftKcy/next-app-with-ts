import type { NextPage } from 'next';
import { FC } from 'react';
import Meetuplist from '../components/meetuplist';
import { IMeetup } from '../types';
import { meetups } from '../utils/meetups';

const Home:FC<IMeetup> = (props) => {

  return (
    <Meetuplist {...props.meetups}/>
  )
}

export async function getStaticProps(){
  // fetch data from an API
  return{
    props:{
      meetups : meetups
    }
  }
}

export default Home;
