import React, {useState} from 'react'
import MovieCard from './MovieCard'

function SearchMovie() {

	const [query, setQuery] = useState('')
	const [movies, setMovie] = useState([])
	// const imageBaseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"

	const searchMovie = async (e) => {
		e.preventDefault()
		

		
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${query}`

		const response = await fetch(url)
		const data = await response.json()
		setMovie(data.results)
		console.log(data)
	}

	return(
		<div>
			<form className="form" onSubmit={searchMovie}>
				<input 
					id="query" 
					value={query} 
					onChange={(e) => setQuery(e.target.value)}
					name="query" 
					placeholder="e.g Jurassic Park" 
				/>
				<button className="button" type="submit">search</button>
			</form>
			<div className="card-list">
			{movies.filter(movie => movie.poster_path).map(movie => (
				<MovieCard movie={movie}/>
			))}
			</div>
		</div>
	)
}

export default SearchMovie

