'use strict';

console.log('app i runing');

var app = {
  title: 'Idecision App',
  subtit: 'wielki cyc',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtit && React.createElement(
    'p',
    null,
    app.subtit
  ) /*jeśli app.subtit jest true, zwraca to co za &&, jeśli nie zwraca false i linia się nie wyświetla*/,
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'here opt' : 'no opt'
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
  age: 26,
  location: 'Crush'
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
    user.name ? user.name : 'Jon Doe'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
