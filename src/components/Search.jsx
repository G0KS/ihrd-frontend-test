import { useEffect, useState } from 'react';
import MovieGrid from './MovieGrid';

function Search({ searchTerm }) {

    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const fetchResults = (term) => {
        const API_KEY = import.meta.env.VITE_API_KEY;

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`
          )
            .then(res => res.json())
            .then(res => {

                setResults(res.results ?? [])
                setLoaded(true)

            });
    }

   
    useEffect(() => {
        fetchResults(searchTerm)
    }, [searchTerm]);

    return (<section>
        {loaded ? <MovieGrid results={results}/>
            : <div className="loading">Loading...</div>
        }

    </section>);
}

export default Search;