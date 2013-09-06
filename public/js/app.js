appRD = angular.module("nodeApp", []);

// Init Application
appRD.value("appName", "nodeApp");

// First commands
appRD.run(function($rootScope, $location) {
    // Set location
    $rootScope.location = $location;
    // Allows get Angular's scope from Browser Console
    window.scope = angular.element(document).scope();
});

/* Basic function to handler ajax error */
var ajaxError = function(response, status, headers, config) {
    console.log("ERROR: Could not get data.");
};