import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TodoList = () => {

  let [todos, setTodos] = useState()

  useEffect( () => {
    axios.get( 'http://jsonplaceholder.typicode.com/todos' ).then( res => {
      let responseTodos = res.data
      setTodos( responseTodos )
    } )
  }, [] )

  console.log(todos);

  return (
    <div>
      <h6>Todo List</h6>
      { todos && todos.map( todo => {
        let { userId, title, id } = todo
        return(
          <div key={ id }>
            <h5>{ userId }</h5>
            <h6>{ title }</h6>
          </div>
        )
      } ) }
    </div>
  )
}

export default TodoList
