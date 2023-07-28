import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './test.css';

function Result({ correct, QuestionsHTML, DataTests, language }) {
  return (
    <div className="result">
      <img src={DataTests.imgResult} alt="icon" />
      <h2>
        {language
          ? `You answered ${correct} questions out of ${QuestionsHTML.length} correctly`
          : `Вы ответили верно на ${correct} из ${QuestionsHTML.length}`}
      </h2>
      <NavLink className="button__reload" to={DataTests.linkPreTest}>
        {language ? 'Try again' : 'Попробовать снова'}
      </NavLink>
    </div>
  );
}

function Game({ step, question, onClickVariant, QuestionsHTML }) {
  // переменная отслеживающая процент текущего прохождения вопросов, пример - "24"
  let reSizeBar = Math.round((step / QuestionsHTML.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${reSizeBar}%` }} className="progress__inner"></div>
      </div>
      <h2 className="game__title">{question.title}</h2>

      {/* используем метод map для прохождения по массиву вопросов и преображаем их в ячейки списка "li" */}
      <ul>
        {question.variants.map((item, index) => (
          <li onClick={() => onClickVariant(index)} key={item}>
            {' '}
            {item}{' '}
          </li>
        ))}
      </ul>
    </>
  );
}

function TestHtml({ language, QuestionsHTML, DataTests }) {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = QuestionsHTML[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div>
      <p className="main__breadcrumbs main__breadcrumbs-test">
        /
        <NavLink className="main__breadcrumbs-item" to="/">
          {language ? ' Home' : ' Главная '}{' '}
        </NavLink>
        /
        <NavLink className="main__breadcrumbs-item" to="/tests">
          {' '}
          {language ? ' Tests' : ' Тесты'}{' '}
        </NavLink>
        /
        <NavLink className="main__breadcrumbs-item" to="/tests/html">
          {' '}
          {DataTests.title}
        </NavLink>
      </p>
      <div className="TestHtml">
        {/* если вопросы кончались отображаем результат  */}
        {step !== QuestionsHTML.length ? (
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
            QuestionsHTML={QuestionsHTML}
          />
        ) : (
          <Result
            correct={correct}
            QuestionsHTML={QuestionsHTML}
            DataTests={DataTests}
            language={language}
          />
        )}
      </div>
    </div>
  );
}

export default TestHtml;
