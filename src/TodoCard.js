import React from 'react'
import { useHistory } from 'react-router-dom'


const TodoCard = ( props ) => {
  let { todo } = props
  let { title, completed, id } = todo
  let history = useHistory()
  return (
    <div
      style={ {
        backgroundColor: 'gray',
        margin: '10px',
        padding: '15px',
        width: '150px'
      } }
      onClick={ () => history.push(`/todo/${id}`) }
      >
      <h4>{ title }</h4>
      <h6>{ `Completed ${ completed }` }</h6>
    </div>
  )
}

export default TodoCard
