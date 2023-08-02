import { MoviesGrid } from "./components/MoviesGrid";
import style from "./components/App.module.css";

export function App() {
  return (
    <div className={style.body}>
      <header className={style.title}>
        Peliculas        
      </header>
      <main>
        <MoviesGrid />        
      </main>
    </div>
  );
}

