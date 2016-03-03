'use strict';

const myApp = {
  BASE_URL: 'http://jsonplaceholder.typicode.com/',
};


let getUsers = function () {
  $.ajax({
  url: myApp.BASE_URL + '/users',
  method: 'GET',
  dataType: 'json'
}).done(function(users) {
  displayUsers(users);
}).fail(function(jqxhr) {
  console.error(jqxhr);
});
};


let displayUsers = function(response) {
  let users = response.users;
  let userListing = require('./users.handlebars');
  $('.user-listing').prepend(userListing({
    users
  }));
};
