import React from 'react'

const Movie = ({movie}) => {
    console.log(movie)
    const url=`https://www.themoviedb.org/t/p/original/`

  return (
    <div className='bg-[rgba(0,0,0,0.8)] h-[500px] relative basis-[350px] shrink-0 grow-0 mr-5 overflow-hidden rounded-md '>

        <img className=" transition ease-in-out transform w-full h-[45%] object-cover hover:scale-[1.08] " src={movie?.poster_path ? `https://www.themoviedb.org/t/p/original/${movie.poster_path} `:''}/>
        <div className='px-2'>
          <h1 className='text-white capitalize font-bold py-3 text-2xl'>{movie?.title}</h1>
          <p className='text-gray-400 text-sm text-justify'>{movie?.overview}</p>
        </div>

    </div>
  )
}

export default Movie