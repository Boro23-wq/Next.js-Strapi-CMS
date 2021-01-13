import Image from 'next/image';

export default function SongCard({ song }) {
  return (
    <section className='card'>
      <Image src={`/images/${song.url}.jpg`} width='300' height='200' />
      <div className='container'>
        <h3>
          <span style={{ color: '#3a3b3c' }}>Track</span> - {song.title}
        </h3>
        <h4>
          <span style={{ color: '#3a3b3c' }}>Artist</span> - {song.artist}
        </h4>
        <h5>
          <span style={{ color: '#3a3b3c' }}>Genre</span> - {song.genre}
        </h5>
        {/* <p>
          <span style={{ color: '#3a3b3c' }}>Release Date</span> -{' '}
          {song.releaseDate}
        </p> */}
      </div>
    </section>
  );
}
