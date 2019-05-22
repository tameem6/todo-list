import React from 'react';
import './todo.css';
const Todos = ({todos,deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="list-group-item list-group-item-info" key = {todo.id}>
                    <span onClick = {() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>               
            )
        })
    ): (
        <p className = "text-center list-group-item"> Nothing is left pending </p>
    )
    return ( 
        <div className="container todos-colloection list-group">
            {todoList}
        </div>
    )
}
export default Todos