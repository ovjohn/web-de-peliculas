import peliculas from "../data/movies.json";

export function MoviesGrid(){
    return(
        <ul>
            {peliculas.map( pelicula =>
                <li key={pelicula.id}>
                    {pelicula.title}
                </li>)}
        </ul>
    )
}