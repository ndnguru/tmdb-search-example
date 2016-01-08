import React from 'react';
 
export default class TemplateComponent extends React.Component {
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