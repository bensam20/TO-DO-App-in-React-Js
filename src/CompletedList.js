import React from "react";

function CompletedList({ todos, setStatus, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <div className="row" key={todo.id}>
          <div className="col l6 m10 s12 offset-l3">
            <div
              className="card"
              style={{ height: "50px", paddingTop: "0.5%" }}
            >
              <span className="black-text" style={{ marginLeft: "2%" }}>
                {todo.todo}
              </span>
              <a
                className="btn-floating waves-effect waves-light black right"
                style={{ marginRight: "2.5%" }}
                onClick={() => deleteTodo(todo.id)}
              >
                <i className="material-icons">delete</i>
              </a>
              {todo.status ? (
                <a
                  className="btn-floating waves-effect waves-light green right"
                  style={{ marginRight: "2.5%" }}
                  onClick={() => setStatus(todo.id, todo.status, todo.todo)}
                >
                  <i className="material-icons center">check</i>
                </a>
              ) : (
                <a
                  className="btn-floating waves-effect waves-light right"
                  style={{ marginRight: "2.5%" }}
                  onClick={() => setStatus(todo.id, todo.status, todo.todo)}
                >
                  <i className="material-icons">check_box_outline_blank</i>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompletedList;
