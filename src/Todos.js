import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Todos = () => {

  let [todos, setTodos] = useState()

  useEffect( () => {
    axios.get( 'http://jsonplaceholder.typicode.com/todos' ).then( ( res ) => {
      let responseTodos = res.data
      setTodos( responseTodos )
    } )
  }, [] )

  console.log(todos);

  return (
    <div>
      <h1>Thi is Todos</h1>
    </div>
  )
}

export default Todos
