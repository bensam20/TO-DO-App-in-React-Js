import React from 'react'

function TodoList({todos}) {

  return (
    <div>
        {todos.map(blog =>(
            <div className="row" key={blog.id}>
                <div className="col l6 m10 s12 offset-l3">
                    <div className="card" style={{height:"50px", paddingTop: "0.5%"}}>
                        <span className='black-text' style={{marginLeft:"2%"}}>{blog.todo}</span>
                        <a className="btn-floating waves-effect waves-light black right" style={{marginRight:"2.5%"}}><i className="material-icons">delete</i></a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TodoList