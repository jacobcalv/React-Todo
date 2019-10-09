import React from "react";
import { isTemplateElement } from "@babel/types";

const Todo = (props) => {
    return(
        <div>
            {props.todos.map(todo => {
                return(
                    <div key={todo.id} className={`todo${todo.completed === true ? "completed" : ""}`}  onClick={(e) => props.toggleTodo(e, todo.id)}>
                        <p>
                            {todo.completed === false ? ` ${todo.task}` :  `DONE ${todo.task}`} 
                        </p>  
                    </div>

                     
                )
               
            })}
        </div>
    )
}

export default Todo