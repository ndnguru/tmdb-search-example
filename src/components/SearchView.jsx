import React from 'react';

/**
 * The Search View Component displays a Jumbotron with a search form.  It also displays the 5 most recent searches and allows the user to click past searches to bring re-query TMDB! Cool Bonus!
 */
export default class SearchView extends React.Component {
    constructor(props) {
        super(props);  //call 'super'... as if we had real classes in JS!! This is just syntactic sugar in ES6

        //initialize an empty state object for use later.
        this.state = {};
        
        //hard binding for functions that need to access component properties and methods.
        this.searchFieldDidChange = this.searchFieldDidChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this); 
        this.recentSearchClicked = this.recentSearchClicked.bind(this);
    }

    /**
     * If a User clicks on a recent search term, we trigger a previous search
     * @param  {Object} event The event object we will inspect for the previous search value
     */
    recentSearchClicked(event) {
        console.log("Recent Search: ", event.target.value);
        //trigger a recent search!
        this.props.submitSearch && this.props.submitSearch(event.target.value);
    }

    /**
     * As the User types into the search field, we want to detect the input and activate/deactivate the search feature.  The allowSearch flag is set, which will enable/disable the search button during rendering
     * @param  {Object} event 
     */
    searchFieldDidChange(event) {
        var value = event.target.value.trim(); //get the value form the search field and if it's not empty, set a flag so we can activate the search button

        //if we have a valid entry, set the flag and store the search term in the component state data
        if(value) {
            this.setState({
                allowSearch : true,
                searchTerm: value
            });
        }
        else { //otherwise disable the search because we dont have input yet
            this.setState({
                allowSearch : false
            });
        }
    }

    /**
     * When the user presses the Search Button or presses enter in the field, we trigger the search
     * @param  {Object} event 
     */
    handleFormSubmission(event){
        event.preventDefault();
        if (this.state.allowSearch) {
            console.log('We are ready to submit the search!');
            //if we've been given a search function we will invoke that function passing the search term
            //this essentially delegates the searching to the parent component, which is the AppHandler
            this.props.submitSearch && this.props.submitSearch(this.state.searchTerm);
        }
    }

    /**
     * React's main render function
     * We display the form and recent search information in a jumbotron
     */
    render() {
        var recentSearches = this.props.recentSearches;
        return (
                <div className="jumbotron" id="searchView">
                <div className="container">
                    <form className="col-sm-6 col-sm-offset-3" role="form" onSubmit={this.handleFormSubmission}>
                        <div className="form-group col-sm-8">
                          <input id='searchField' type="text" placeholder="enter movie title" className="form-control" onChange={this.searchFieldDidChange}/>
                        </div>
                        <div className="form-group col-sm-4">
                        <button type="button" className="btn btn-primary form-control" disabled={(!!this.state.allowSearch)?false:true} onClick={this.handleFormSubmission}>Search</button>
                        </div>
                    </form>
                    {recentSearches && 
                        <div className='col-sm-6 col-sm-offset-3 recentSearches'>
                            Recent Searches: &nbsp;
                            {
                                recentSearches.map((item, index)=> {
                                    return (
                                        <span key={index}>

                                            <button className='btn btn-xs btn-info' onClick={this.recentSearchClicked} value={item}> 
                                                {item}</button> &nbsp;&nbsp;
                                        </span>
                                        )
                                })
                            }
                        </div>
                    }
                   
              </div>
              
            </div>
        );


    }
}