import React from 'react' ; 

const Todo = ({ todo, toggleTodo }) => {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }


    return (
        <div>
            <p>
                <input type = "checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
                {todo.name}
            </p>
        </div>
    )
}


export default Todo ;