import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'
import TodoCard from './TodoCard'

const Todos = () => {

  let [todos, setTodos] = useState()

  useEffect( () => {
    axios.get( 'http://jsonplaceholder.typicode.com/todos' ).then( ( res ) => {
      let responseTodos = res.data
      setTodos( responseTodos )
    } )
  }, [] )

  return (
    <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } } >
      { todos && todos.slice(0, 10).map( todo => (
        <TodoCard todo={ todo } />
      ) ) }
    </div>
  )
}

export default Todos
