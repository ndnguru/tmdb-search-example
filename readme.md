TMDB Search App
===
By Rusil G. Patel
## Overview
This example single page application connects to the TMDB API to search for movies.  The user may search form movies by entering search terms in a form.

The search is performed asynchornously using GET requests to the TMDB API

##Implementation

###View/Frameworks
####ReactJS
We will use Facebook's ReactJS framework to render the content in the application.  We also use React CSS Transitions to add some simple animations when content is loading or changing

####Bootstrap
We use Bootstrap for nicely formatted HTML markup

####Custom CSS
The *main.css* loads any custom CSS we need.  We use this to control transitions and the grid layout.

On a full browser, we show movie posters in a grid format at 150px wide, but on mobile, we restrict posters to a single column

On hover over a movie poster, we show the movie stats (release date and rating)

#Build Tools
We use *webpack* to process and consolidate all the JS code into a single *bundle.js* for use in the client index.html page.

**NOTE:** Because this is a sample application that we want to review, I did not minify the javascript or perfrom production-level optimization to reduce the size.  We can use webpack to optimize the bundle if necessary.

#Running the Application
##Method 1 - QuickStart
To run the application you can simply open the index.html file in a browser.  All the assets needed for the client app are located in the 'build' folder.

##Method 2 - Webback Dev Server
If you want to build the application and run it using a server, you will to use node and npm to build and run the app.

###Install Modules/Dependencies
Run npm install to fetch and install all the modules.  Modules are indentiied in the package.json file

```
npm install
```

After all dependecies are install, you should have access to *webpack-dev-server* which will build all JS code and update the bundle.js file in the build folder.
Run:

```
webpack-dev-server
```
Then open your browswer and load the URL: [http://localhost:8080](http://localhost:8080) or [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) to see the webpack banner showing the status of the dev build.  The Webpack Dev Server is configured to use Hot Module Replacement.  This allows you to update code and the browswer will update automatically.  This is intended to be used in a development mode only.

---

####Contact Me
For any questions, contact me at [rusil.patel@gmail.com] (mailto:rusil.patel@gmail.com)
