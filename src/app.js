console.log('app i runing');

var app = {
  title: 'Idecision App',
  subtit: 'wielki cyc'
}
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtit}</p>
    <ol>
      <li>one</li>
      <li>two</li>
      <li>thre</li>
    </ol>
  </div>
);

var user = {
  name: 'Jula',
  age: 23,
  // location: 'Dupcia'
}

function getLocation(location) {
  if (location) {
    return <p>Loc: {location}</p>
  }
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
