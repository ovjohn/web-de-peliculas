import peliculas from "../data/movies.json";
import { MovieCard } from "./MovieCard";
import style from "../components/MoviesGrid.module.css"

export function MoviesGrid(){
    return(
        <ul className={style.movieGrid}>
            {peliculas.map( pelicula =>
                <MovieCard key={pelicula.id} movie={pelicula} />
            )}
        </ul>
    )
}