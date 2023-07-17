import './FeedBackForm.css';

function FeedBackForm() {
  return (
    <div className="container">
      <form>
        <p className="form__title">Форма обратной связи</p>
        <input type="text" placeholder="Ваше имя"></input>
        <input type="text" placeholder="Телефон"></input>
        <input type="text" placeholder="E-mail"></input>
        <label className="checkbox__label">
          <input type="checkbox" placeholder="Ваше имя"></input>
          Согласен на обработку персональных данных
        </label>
      </form>
    </div>
  );
}

export default FeedBackForm;
