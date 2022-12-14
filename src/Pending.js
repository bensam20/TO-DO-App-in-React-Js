import React from 'react'
import useFetch from './useFetch';
import PendingList from './PendingList';

function Pending() {

  const { data:todos, isPending, error } = useFetch('http://localhost:7000/todos');
  const pendingTodos = todos?.filter(todo => todo.status==false);

  return (
    <div>
      <h3 className='center'>Pending...</h3>
      { error && <div>{ error }</div> }
      { isPending && <div> Loading...</div> }
      { todos && <PendingList todos = { pendingTodos } />}
    </div>
  )
}

export default Pending;