import './MovieList.css'
import movies from './movies';

const MovieList = () => {
    return (<div className="movie-list">
        {movies.map((movie)=>(<div key={movie.id} className="movie-card">
            {movie.title}
            <img src="{movie.image}" className='movie-img'/>
            <h1>Title:{movie.title}</h1>
            <h3>Language: {movie.language}</h3>
            <h3>Cost: {movie.cost}</h3>
        </div>
        ))}
    </div>
    );
};

export default MovieList;