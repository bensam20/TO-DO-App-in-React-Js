import React from "react";
import useFetch from "./useFetch";
import PendingList from "./PendingList";
import { useState, useEffect } from "react";
import { performRequest } from "./Services/apiHandler";

function Pending() {
  const getToDos = async () => {
    let data = await performRequest("http://localhost:7000/todos");
    setPendingToDos([...data?.filter((todo) => todo.status == false)]);
  };
  useEffect(() => {
    getToDos();
  }, []);
  const [pendingTodos, setPendingToDos] = useState([]);
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
      <h3 className="center">Pending...</h3>
      {/* { error && <div>{ error }</div> }
      { isPending && <div> Loading...</div> } */}
      {pendingTodos && (
        <PendingList
          todos={pendingTodos}
          deleteTodo={deleteTodo}
          setStatus={setStatus}
        />
      )}
    </div>
  );
}

export default Pending;
