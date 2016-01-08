import React from 'react'; //import react
import ReactDOM from 'react-dom'; //import react-dom, now extracted to a separate module
import AppHandler from './components/AppHandler'; //import the base handler for the app

ReactDOM.render(<AppHandler/>, document.getElementById('app')); //render the component to the 'app' div element

