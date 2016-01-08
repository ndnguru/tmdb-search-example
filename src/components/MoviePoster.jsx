import React from 'react';
import moment from '../js/vendor/moment.min.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * A Movie Poster displays the image, title and overlay for a movie
 */
export default class MoviePoster extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var movie = this.props.movie;

        // get the release date.  Some entries do not have it so we need to check if it exists first
        // we use Moment.js utility to format the Date
        var releaseDate = (movie.release_date) && moment(movie.release_date).format('MMM DD, YYYY');
        return (
            
                <div className='movie' key={movie.id}>
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
                </div>
        );
    }
}