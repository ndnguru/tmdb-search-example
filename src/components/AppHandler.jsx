import React from 'react';
import NavigationHeader from './NavigationHeader';
import SearchView from './SearchView';
import ResultsView from './ResultsView';

// require('../css/main.css');

export default class AppHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}; // initialize an empty local state
        //hard bind 'this' because we dont get it by default using ES6 Classes in React
        this.submitSearch = this.submitSearch.bind(this);
    }
    submitSearch(searchTerms) {
        console.log('Searching TMDB for: ', searchTerms);
        var recentSearches = this.state.recentSearches || [];
        recentSearches.unshift(searchTerms);
        if (recentSearches.length > 5) {
            recentSearches.pop();
        }
        this.setState({
            recentSearches
        });

        //conduct the search using jquery ajax
        var url = "https://api.themoviedb.org/3/search/movie?api_key=6c4636bd7b4475e323de0aee55882eb8&query="+searchTerms;
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