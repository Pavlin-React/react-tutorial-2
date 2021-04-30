import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Todo = () => {

  let { id } = useParams()
  let [todoDetails, setTodoDetails] = useState( {} )

  useEffect(() => {
    axios
      .get( `http://jsonplaceholder.typicode.com/todos/${ id }` )
      .then( (res) => {
        let responseTodo = res.data
        setTodoDetails(responseTodo)
      } )
  }, [])
  let { completed, userId, id: todoId, title } = todoDetails

  return (
    <div>
      { todoDetails && <h1>{ `Todo Id: ${ todoId }` }</h1> }
      { todoDetails && <h1>{ `Completed: ${ completed }` }</h1> }
      { todoDetails && <h1>{ `UserId: ${ userId }` }</h1> }
      { todoDetails && <h1>{ `Title: ${ title }` }</h1> }
    </div>
  )
}

export default Todo
