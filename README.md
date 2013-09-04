<img src="http://zizzamia.com/img/bombolonejs_logo.png"/>

### Bombolone.js version 0.0.2 ###

Bombolone.js is a tasty Node App based on Express, Mongodb, AngularJS, jQuery, Sass and Bootstrap.
It's designed to be a simple, flexible toolset for projects of any size. 



## Quick start in 5 steps

```shell
# Run Mongodb
sudo mongod

# Clone the git repo in your new web app folder
git https://github.com/Opentaste/bombolone.js.git new_app

# Go to new_app and Install all the dependencies
npm install

# In two new tabs with the same path run Compass
compass watch

# Run Bombolone 
node app.js
```


## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      bootstrap/        --> all bootstrap files
        css/
        img/
        js/
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade


## Who we are

Javascript Lovers!

The project was created by [Leonardo Zizzamia](http://zizzamia.com/). 


## License

* BSD
