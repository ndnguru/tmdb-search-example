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
        var movies = searchResults && searchResults.results; //if we have searchResults then extract the 'results' property which was returned in the JSON response from the API
        if (!movies.length) {  // there are no results, we display the message to the user.
            return (
                <div className='col-xs-12'>
                    <div className='lead'>No results found for '{this.props.currentQuery}'</div>
                </div>
            );
        }
        // searchResults && console.log('Search Results: ', searchResults);
        
        // We will use React CSS Transitions to add some simple fading effects for loading search results 
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