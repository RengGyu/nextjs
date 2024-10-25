import { Metadata } from "next"
import homeStyles from "./home.module.css";
import Movie from "./movie";

import { URL } from "../constant";

export const metadata: Metadata = {
  title: "Home",
}

async function getMovies() {
  // const response = await fetch(URL);
  // const json = await response.json();
  // return json;
  return await fetch(URL).then(res => res.json())
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={homeStyles.container}>
      {movies.map(movie => 
        <Movie id={movie.id} poster_path={movie.poster_path} title={movie.title} />
      )}
    </div>
  )
}