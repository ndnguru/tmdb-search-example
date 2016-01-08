import React from 'react';
/**
 * Simple Bootstrap Navigation Header React Component.
 * We are using ES2015/ES6 Classes here.
 * The optional showSearchForm flag will allow us to toggle a search form in the nav bar, which would be useful if we want the user to still be able to search while the normal search form is no visible, due to scrolling down.  
 *
 * TODO: implement the logic to trigger a search using the nav Form
 */
export default class NavigationHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
             <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">TMDB Movie Search</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  {
                    (this.props.showSearchForm) &&
                    <form className="navbar-form navbar-right" role="form">
                    <div className="form-group">
                      <input type="text" placeholder="search terms" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-success">Search</button>
                  </form>
                }
                </div>
              </div>
            </nav>


        );
    }
}