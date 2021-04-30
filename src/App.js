import { useState } from 'react'
import Header from './component/Header'
import './App.css'
import TodoList from './component/TodoList'

const App = () => {

  let [showHeader, setShowHeader] = useState( false )


  return (
    <div className="App">
      <h1>Our App</h1>
      <button onClick={ () => setShowHeader( !showHeader ) }>
        { showHeader ? 'Hide Counter' : 'Show Counter' }
      </button>
      { showHeader && <Header /> }
      <TodoList />
    </div>
  )
}

export default App
