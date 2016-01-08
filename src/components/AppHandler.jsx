import React from 'react';
import NavigationHeader from './NavigationHeader';
import SearchView from './SearchView';
import ResultsView from './ResultsView';

/**
 * This is the Main Application Handler and will contain the logic to conduct searches to TMDB
 * AppHandler will pass data down to child components as needed.
 */
export default class AppHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}; // initialize an empty local state
        //hard bind 'this' because we dont get it by default using ES6 Classes in React
        this.submitSearch = this.submitSearch.bind(this);
    }
    /**
     * submitSearch is passed down to the SearchView component, which will invoke the function once valie search criteria is supplied.  We will then use JQuery to perfrom an AJAX async GET query to the TMDB API.  I used my own API key here
     * @param  {[type]} searchTerms [description]
     * @return {[type]}             [description]
     */
    submitSearch(searchTerms) {
        console.log('Searching TMDB for: ', searchTerms);
        var recentSearches = this.state.recentSearches || [];
        if (recentSearches.indexOf(searchTerms) == -1) {
            recentSearches.unshift(searchTerms);
            if (recentSearches.length > 5) {
                recentSearches.pop();
            }
            this.setState({
                recentSearches
            });
        }
        
        
        // TMDB API KEY
        var API_KEY = '6c4636bd7b4475e323de0aee55882eb8';
        
        //construct the URL for the AJAX async request
        var url = "https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query="+searchTerms;
            // $("#results").html('<div class="col-xs-12 text-center loader">Loading...</div>');
        var self = this;
        $.ajax({
            url: url, 
            async: true, 
            type: 'get', 
            success: function(searchResults){
                console.log('Received Search Data: ', searchResults);
                self.setState({
                    searchResults,
                    currentQuery:searchTerms
                })
            },
            error: function(error) {
                console.log('Error:', error);
                //basic error handling, pop up an alert window for now.
                alert('Uh oh! We encountered a problem getting the data! Shucks!');
            }
        });
    }
    render() {
        return (
            <div>
                <NavigationHeader />
                <SearchView  submitSearch={this.submitSearch} recentSearches={this.state.recentSearches}/>
                {this.state.searchResults &&
                    <div className='container-fluid'>
                        <div className="row">
                            <ResultsView searchResults={this.state.searchResults} currentQuery={this.state.currentQuery} />
                        </div>
                    </div>
                }
                <footer>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-xs-12 text-center'>
                          <p>TMDB Movie Search SPA  | Rusil G. Patel &copy;  2015</p>
                        </div>
                        
                      </div>
                    </div>
                  </footer>
            </div>
        );
    }
}