import React from 'react'
import useFetch from './useFetch';
import CompletedList from './CompletedList';

function Completed() {

  const { data:todos, isPending, error } = useFetch('http://localhost:7000/todos');
  const completedTodos = todos?.filter(todo => todo.status==true);

  return (
    <div>
      <h3 className='center'>Completed :)</h3>
      { error && <div>{ error }</div> }
      { isPending && <div> Loading...</div> }
      { todos && <CompletedList todos = { completedTodos } />}
    </div>
  )
}

export default Completed;