import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';

class App extends React.Component {
    state = {
        tasks: [],
        filter: 'all',
        nextId: 1 // Добавляем счетчик для id
    };

    addTask = (taskName) => {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, { 
                id: prevState.nextId, // Используем уникальный id
                name: taskName, 
                completed: false 
            }],
            nextId: prevState.nextId + 1 // Увеличиваем счетчик
        }));
    };

    toggleTask = (id) => { // Теперь принимаем id вместо индекса
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        }));
    };

    setFilter = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { tasks, filter } = this.state;
        const filteredTasks = tasks.filter(task => {
            if (filter === 'completed') return task.completed;
            if (filter === 'incomplete') return !task.completed;
            return true;
        });

        return (
            <div style={{
                fontFamily: 'Arial, sans-serif',
                maxWidth: '500px',
                margin: '0 auto',
                padding: '20px'
            }}>
                <h1>ToDo List</h1>
                <ToDoForm addTask={this.addTask} />
                <div style={{ margin: '15px 0' }}>
                    <button 
                        style={{ 
                            padding: '5px 10px',
                            marginRight: '5px',
                            background: filter === 'all' ? '#007bff' : '#f8f9fa',
                            color: filter === 'all' ? 'white' : '#333',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                        onClick={() => this.setFilter('all')}
                    >
                        Все
                    </button>
                    <button 
                        style={{ 
                            padding: '5px 10px',
                            marginRight: '5px',
                            background: filter === 'completed' ? '#007bff' : '#f8f9fa',
                            color: filter === 'completed' ? 'white' : '#333',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                        onClick={() => this.setFilter('completed')}
                    >
                        Выполненные
                    </button>
                    <button 
                        style={{ 
                            padding: '5px 10px',
                            marginRight: '5px',
                            background: filter === 'incomplete' ? '#007bff' : '#f8f9fa',
                            color: filter === 'incomplete' ? 'white' : '#333',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                        onClick={() => this.setFilter('incomplete')}
                    >
                        Невыполненные
                    </button>
                </div>
                <ToDoItems tasks={filteredTasks} toggleTask={this.toggleTask} />
            </div>
        );
    }
}

export default App;