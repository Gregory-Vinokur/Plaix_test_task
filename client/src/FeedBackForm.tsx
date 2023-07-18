import { useState } from 'react';
import './FeedBackForm.css';

function FeedBackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
    };

    try {
      const response = await fetch('http://localhost:8000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Ваше сообщение отправлено! Ожидайте звонка.');
        setName('');
        setEmail('');
        setPhone('');
        setChecked(false);
      } else {
        alert('Что-то пошло не так. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <p className="form__title">Форма обратной связи</p>
        <input
          value={name}
          type="text"
          required
          placeholder="Ваше имя"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          value={phone}
          type="tel"
          required
          placeholder="Телефон"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <input
          value={email}
          type="mail"
          required
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className="checkbox__label">
          <input
            type="checkbox"
            required
            checked={checked}
            onChange={() => setChecked(!checked)}
          ></input>
          Согласен на обработку персональных данных
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default FeedBackForm;
