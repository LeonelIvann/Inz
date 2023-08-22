import React, { useEffect, useState } from 'react';
import supabase from './supabase';

function Publicaciones({ filtro }) {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    async function fetchPublicaciones() {
      let query;

      if (filtro === 'bocetos') {
        query = supabase.from('bocetos').select('*');
      } else if (filtro === 'poses') {
        query = supabase.from('poses').select('*');
      } else if (filtro === 'eyecat-makeup') {
        query = supabase.from('eyecat-makeup').select('*');
      } else if (filtro === 'steampunk-woman') {
        query = supabase.from('steampunk-woman').select('*');
      } else if (filtro === 'memes') {
        query = supabase.from('memes').select('*');
      }

      const { data, error } = await query;

      if (error) {
        console.error(error);
      } else {
        setPublicaciones(data);
      }
    }

    fetchPublicaciones();
  }, [filtro]);

  return (
    <article className='article__containerPosts'>
      <a href='#top' className='a__backToTop'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
  </svg>
</a>

      {publicaciones.map((publicacion) => (
        <div className='div___publicacion' key={publicacion.id} tabIndex={0}>
          <div
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${publicacion.image_url})`
            }}
            className='div__publicacionImage'
          ></div>
        </div>
      ))}
    </article>
  );
}

export default Publicaciones;
