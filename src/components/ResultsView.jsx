import React from 'react';
import MoviePoster from './MoviePoster';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


/**
 * Results View will display the search results in a grid format using a simple Unordrered List formatted with CSS
 */
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
                <ReactCSSTransitionGroup transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                {
                    movies.map((movie, index) => {
                    return (
                        <li key={movie.id}>
                            <MoviePoster movie={movie}/>
                        </li>
                        )
                    })
                }
                </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}