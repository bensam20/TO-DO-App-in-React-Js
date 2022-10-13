import React from "react";
import TodoList from "./TodoList";
import useFetch from "./useFetch";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { performRequest } from "./Services/apiHandler";

function Home() {
  const getToDos = async () => {
    let data = await performRequest("http://localhost:7000/todos");
    
    setToDoList(data);
  };
  useEffect(() => {
    getToDos();
  }, []);
  const [toDoList, setToDoList] = useState([]);
  const [todo, setTodo] = useState("");
  const status = false;
  const [pending, setPending] = useState();
  const [submitted, setSubmitted] = useState();
  const navigate = useNavigate();

  let addTodo = () => {
    console.log("inside useEffect");
    const newTodo = { todo, status };

    setPending(true);

    fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    }).then(() => {
      console.log("new todo added");
      setPending(false);
      getToDos().then(() => {
        setSubmitted(true);
      });
      //   window.location.reload();
    });
  };
  const setStatus = (id, status, todo) => {
    console.log(id, status, todo);
    const newStatus = !status;
    const updateStatus = { todo: todo, status: newStatus, id: id };
    const url = "http://localhost:7000/todos/" + id.toString();
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateStatus),
    }).then(() => {
      getToDos();
    });
  };

  const deleteTodo = (id) => {
    const url = "http://localhost:7000/todos/" + id.toString();
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      getToDos();
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col l6 m10 s12 offset-l3">
          <div className="card center">
            <input
              className="icon_prefix"
              type="text"
              placeholder="Enter Text"
              style={{ width: "90%" }}
              onChange={(e) => setTodo(e.target.value)}
            />
            <a
              className="btn-floating waves-effect waves-light black"
              onClick={addTodo}
            >
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>
      </div>
      {/* {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>} */}
      {toDoList && (
        <TodoList
          todos={toDoList}
          setStatus={setStatus}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}

export default Home;
