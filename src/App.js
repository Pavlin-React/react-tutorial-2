import Todo from './Todo'
import Todos from './Todos'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path='/' children={ <Todos /> } />
        <Route path='/todo/:id' children={ <Todo /> } />
      </Switch>
    </Router>
  )
}

export default App
