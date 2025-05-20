import React from 'react';
import './EmailForm.css';

const EmailForm = () => {
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [messageType, setMessageType] = React.useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Валидация электронной почты
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            setMessage('Электронная почта успешно отправлена!');
            setMessageType('success');
            setEmail('');
        } else {
            setMessage('Ошибка: Введите корректный адрес электронной почты.');
            setMessageType('error');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={handleChange}
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
};

export default EmailForm;