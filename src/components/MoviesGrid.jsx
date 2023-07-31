import peliculas from "../data/movies.json";
import { MovieCard } from "./MovieCard";

export function MoviesGrid(){
    return(
        <ul>
            {peliculas.map( pelicula =>
                <MovieCard key={pelicula.id} movie={pelicula} />
            )}
        </ul>
    )
}