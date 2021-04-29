import Header from './component/Header';
import './App.css';

let infos = [
  {
    firstName: 'Juji',
    secondName: 'Bonbona',
    age: 33
  },
  {
    firstName: 'Pavel',
    secondName: 'Nikolov',
    age: 32
  },
  {
    firstName: 'Timo',
    secondName: 'Petrov',
    age: 24
  }
]


function App() {
  return (
    <div className="App">
      <h1>Company Info</h1>
      { infos.map( info => {
        return <Header key={ infos.firstName } { ...info } />
      } ) }
    </div>
  );
}

export default App;
