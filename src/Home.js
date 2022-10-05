import React from 'react'
import TodoList from './TodoList';
import useFetch from './useFetch';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Home() {
    const { data:todos, isPending, error } = useFetch('http://localhost:7000/todos');

    const [todo, setTodo] = useState('');
    const status = true;
    const [pending, setPending] = useState(false);
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState()

    useEffect((e) => {
        console.log('inside useEffect')
        const newTodo = { todo, status };

        setPending(true);
        
        fetch('http://localhost:7000/todos', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTodo)
        }).then(() => {
            console.log('new todo added');
            setPending(false);
            navigate('/');  
        })    
    }, [submitted]);

    return (
        <div>
            <div className="row">
                <div className="col l6 m10 s12 offset-l3">
                    <div className="card center">
                        <input 
                            className="icon_prefix" 
                            type="text" 
                            placeholder='Enter Text' 
                            style={{width:"90%"}}
                            onChange = {(e) => setTodo(e.target.value)}
                        />
                        <a className="btn-floating waves-effect waves-light black" onClick={ () => setSubmitted(true)}><i className="material-icons">add</i></a>
                    </div>
                </div>
            </div>
            { error && <div>{ error }</div> }
            { isPending && <div> Loading...</div> }
            { todos && <TodoList todos = { todos } />}
        </div>
  )
}

export default Home