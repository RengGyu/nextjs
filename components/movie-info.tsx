import { URL } from '../app/constant'
import styles from '../styles/movie-info.module.css';

export const getMovie = async (id: string) => {
  const response = await fetch(`${URL}/${id}`)
  const json = await response.json();
  return json
}

export default async function MovieInfo({id}: {id: string}){
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} alt={movie.title}/>
      <div className={styles.info}>
        <h1 className={movie.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>HomePage &rarr;</a>
      </div>
    </div>
  )
}