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
});
};
