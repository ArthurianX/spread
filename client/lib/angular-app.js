/** We are creating the angular app here, because the items in the lib folder are the first ones to load in a Meteor Environment */
angular.module('spread',[
    'angular-meteor',
    'spread.home'
]);
