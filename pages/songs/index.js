import SongCard from '../../components/SongCard';
import StrapiClient from '../../strapi-client/StrapiClient';
// import { tracks } from '../../data';

const Songs = ({ songsList }) => {
  return (
    <div className='songs'>
      {songsList.map((song) => (
        <SongCard song={song} key={song._id} />
      ))}
    </div>
  );
};

const Strapi_Client = new StrapiClient();

export const getStaticProps = async () => {
  const data = await Strapi_Client.fetchData(`/songs`);
  return {
    props: {
      songsList: data,
    },
  };
};

export default Songs;
