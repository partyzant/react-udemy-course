console.log('app i runing');

const app = {
  title: 'Idecision App',
  subtit: 'wielki cyc',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtit && <p>{app.subtit}</p>}
    <p>{app.options.length > 0 ? 'here opt' : 'no opt'}</p>
    <ol>
      <li>one</li>
      <li>two</li>
      <li>thre</li>
    </ol>
  </div>
);

const user = {
  name: 'Jula',
  age: 26,
  location: 'Crush'
}

function getLocation(location) {
  if (location) {
    return <p>Loc: {location}</p>
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Jon Doe'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
