import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Meetuplist from '../components/meetuplist';
import { meetups } from '../utils/meetups';

const Home:NextPage= ({meetups}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Meetuplist {...meetups}/>
  )
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // fetch data from an API
  return{
    props:{
      meetups : meetups
    }
  }
}

export default Home;
