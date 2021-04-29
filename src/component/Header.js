import React from 'react'

const Header = ( props ) => {
  let { name, age: oldAge } = props
  return (
    <div>
      <h1>his name is { name } and he is { oldAge } years old</h1>
    </div>
  )
}

export default Header
