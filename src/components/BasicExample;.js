import React from 'react'
import { useHistory } from 'react-router-dom';

const BasicExample = () => {

  let history = useHistory();
  return (
    <div>
      <h1>home page content</h1>
      <button className='btn btn-primary' onClick={()=>history.push('/home')}>login</button>
    </div>
  )
}

export default BasicExample;
