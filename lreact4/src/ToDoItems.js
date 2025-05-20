import React from 'react';
import './ToDoItems.css';

const ToDoItems = ({ tasks, toggleTask }) => (
    <div className="todo-items">
        {tasks.map((task) => ( // Убираем index, используем task.id
            <div key={task.id} className="task">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)} // Передаем id вместо индекса
                />
                <span className={task.completed ? 'completed' : ''}>
                    {task.name}
                </span>
            </div>
        ))}
    </div>
);

export default ToDoItems;