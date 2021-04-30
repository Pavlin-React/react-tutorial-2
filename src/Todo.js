import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Todo = () => {

  let { id } = useParams()
  let [todoDetails, setTodoDetails] = useState()

  useEffect(() => {
    axios
      .get( `http://jsonplaceholder.typicode.com/todos/${ id }` )
      .then( (res) => {
        let responseTodo = res.data
        setTodoDetails(responseTodo)
      } )
  }, [])
  console.log(todoDetails);

  return (
    <div>
      <h1>{ id }</h1>
    </div>
  )
}

export default Todo
