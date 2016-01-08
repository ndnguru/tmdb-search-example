import React from 'react';
import moment from '../js/vendor/moment.min.js'
 
export default class ResultsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var searchResults = this.props.searchResults;
        var movies = searchResults && searchResults.results;
        if (!movies.length) {
            return (
                <div className='col-xs-12'>
                    <div className='lead'>No results found for '{this.props.currentQuery}'</div>
                </div>
            );
        }
        searchResults && 
            console.log('Search Results: ', searchResults);
        return (
            <div className='grid-container col-xs-12'>
                <div className='lead'>Search Results For: '{this.props.currentQuery}'</div>
                <hr/>
                <ul className='movies columns-auto'>
                {movies.map((movie, index) => {
                    var releaseDate = (movie.release_date) && moment(movie.release_date).format('MMM DD, YYYY');
                    return (
                        <li className='movie' key={index}>

                            {
                                (movie.poster_path)?
                                <img src={'http://image.tmdb.org/t/p/w154'+movie.poster_path}/>
                                :
                                <img src='build/img/movie-poster.jpg'/>
                            }
                            <p><span className='title'>{movie.title}</span></p>
                            <div className='text-center movieStats'>
                                {releaseDate &&
                                    <div> 
                                    <span className='glyphicon glyphicon-time'></span>
                                    &nbsp;
                                    {releaseDate}
                                    <hr/>
                                    </div>
                                }
                                <span className='lead'>
                                    <span className='glyphicon glyphicon-heart'></span>
                                    &nbsp; {movie.vote_average}
                                </span>
                            </div>
                        </li>
                        )
                })}
                </ul>

            </div>



        );
    }
}