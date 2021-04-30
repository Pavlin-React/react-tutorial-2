import React, { useEffect, useState } from 'react'

const Header = () => {
  let [count, setCount] = useState( 0 )

  useEffect( () => {
    console.log( 'useEffect is running' );
  }, [  ] )

  return (
    <div>
      <h6>Counter</h6>
      <p>Current count is { count }</p>
      <button onClick={ () => setCount( count + 1 ) } >Increment Count</button>
    </div>
  )
}

export default Header
