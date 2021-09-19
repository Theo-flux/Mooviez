import React from 'react'


function MovieCard(props) {

	const movie = props.movie
	return (

		<div className="card" key={movie.id}>
			<div className="card-img">
				<img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
			</div>
			<div className="card-details">
				<h2 className="card-title">{movie.original_title}</h2>
				<p><small><strong>RELEASE DATE:</strong>{movie.release_date}</small></p>
				<p><small><strong>RATING:</strong>{movie.vote_average}</small></p>
				<p>{movie.overview}</p>
			</div>
		</div>

	)
}

export default MovieCard