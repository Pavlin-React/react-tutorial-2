import React from 'react'

const Header = ( props ) => {
  let { firstName, secondName, age } = props
  return (
    <div>
      <h1>Employ name: { firstName } { secondName } { age } </h1>
    </div>
  )
}

export default Header
