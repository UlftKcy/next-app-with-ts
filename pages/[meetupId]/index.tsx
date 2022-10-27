import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { meetups } from '../../utils/meetups';

const MeetUpDetail = ({ meetup }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(meetup);
  return (
    <div className='h-screen flex place-items-center p-12'>
      <div className='grid grid-cols-2 grid-rows-1'>
        <div className='col-span-1 rounded-lg'>
          <img className='rounded-md' src={meetup.image.src} alt={meetup.title} />
        </div>
        <div className='col-span-1 flex place-items-center'>
          <div className='w-full text-center'>
            <h1 className='text-3xl font-bold'>{meetup.title}</h1>
            <p>{meetup.description}</p>
            <span>{meetup.address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {

  // Get the paths we want to pre-render based on posts
  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const meetup = meetups.find(meetup => meetup.id === params?.meetupId);
  return {
    props: {
      meetup
    }
  }
}

export default MeetUpDetail;