'use strict';

console.log('app i runing');

var app = {
  title: 'Idecision App',
  subtit: 'wielki cyc'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtit
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'one'
    ),
    React.createElement(
      'li',
      null,
      'two'
    ),
    React.createElement(
      'li',
      null,
      'thre'
    )
  )
);

var user = {
  name: 'Jula',
  age: 23
  // location: 'Dupcia'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Loc: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
