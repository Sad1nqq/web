import React from 'react';
import './EmailForm.css';

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            messageType: ''
        };
    }

    handleChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email } = this.state;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            this.setState({
                message: 'Электронная почта успешно отправлена!',
                messageType: 'success',
                email: ''
            });
        } else {
            this.setState({
                message: 'Ошибка: Введите корректный адрес электронной почты.',
                messageType: 'error'
            });
        }
    }

    render() {
        const { email, message, messageType } = this.state;

        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Введите вашу электронную почту"
                        required
                    />
                    <button type="submit">Отправить</button>
                </form>
                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}
            </div>
        );
    }
}

export default EmailForm;