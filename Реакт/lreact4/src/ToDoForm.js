import React from 'react';
import './ToDoForm.css';

class ToDoForm extends React.Component {
    state = { task: '' };

    handleChange = (e) => this.setState({ task: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.task.trim()) {
            this.props.addTask(this.state.task);
            this.setState({ task: '' });
        }
    };

    render() {
        return (
            <div className="todo-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.task}
                        onChange={this.handleChange}
                        placeholder="Введите задачу"
                        required
                    />
                    <button type="submit">Добавить</button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;