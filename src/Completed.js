import React from "react";
import useFetch from "./useFetch";
import CompletedList from "./CompletedList";
import { useState, useEffect } from "react";
import { performRequest } from "./Services/apiHandler";

function Completed() {
  const getToDos = async () => {
    let data = await performRequest("http://localhost:7000/todos");
    setCompletedToDos([...data?.filter((todo) => todo.status == true)]);
  };
  useEffect(() => {
    getToDos();
  }, []);
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

  const [completedTodos, setCompletedToDos] = useState([]);

  return (
    <div>
      <h3 className="center">Completed :)</h3>
      {/* {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>} */}
      {completedTodos && (
        <CompletedList
          todos={completedTodos}
          setStatus={setStatus}
          deleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}

export default Completed;
