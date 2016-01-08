import React from 'react';
 
export default class SearchView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //hard binding for functions that need to access component properties and methods.
        this.searchFieldDidChange = this.searchFieldDidChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this); 
        this.recentSearchClicked = this.recentSearchClicked.bind(this);
    }
    recentSearchClicked(event) {
        console.log("Recent Search: ", event.target.value);
        this.props.submitSearch && this.props.submitSearch(event.target.value);
    }
    searchFieldDidChange(event) {
        var value = event.target.value.trim(); //get the value form the search field and if it's not empty, set a flag so we can activate the search button
        if(value) {
            this.setState({
                allowSearch : true,
                searchTerm: value
            });
        }
        else {
            this.setState({
                allowSearch : false
            });
        }
    }
    handleFormSubmission(event){
        event.preventDefault();
        if (this.state.allowSearch) {
            console.log('We are ready to submit the search!');
            this.props.submitSearch && this.props.submitSearch(this.state.searchTerm);
        }
    }
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