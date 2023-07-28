import './main.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import Learning from '../learning/Learning';
import Practice from '../practice/Practice';
import DataTests from '../../data/DataTests';
import DataPractice from '../../data/DataPractice';
import DataLearning from '../../data/DataLearning';
import Tests from '../test/Tests';
import Test from '../test/Test.js';

import AllQuestion from '../test/dataTest/AllQuestions';
import AllQuestionENG from '../test/dataTest/AllQuestionsENG';
import PreTest from '../test/PreTest';
import Lesson from '../learning/Lesson';
import LessonDate from '../learning/dataLesson/lesson';
import DataTask from '../practice/dataTask';

// если mockapi лег
import collection from './api.json';
import Task from '../practice/Task';

const Main = ({ language }) => {
  // const [collections, setCollections] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  let QuestionsAllLanguage = language ? AllQuestionENG : AllQuestion;

  // useEffect(() => {
  //   setLoading(true);
  //   fetch('https://64abe1a39edb4181202ebbe2.mockapi.io/list_learning')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCollections(json);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert('error api');
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="main">
      <div className="decor bg-decor"></div>
      <div className="decor bg-decor-two"></div>
      <div id="main_container" className="main__container container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Navigation collections={collection} language={language} />
                // isLoading={isLoading} если mockapi работает
              }
            />
            {/* обучение */}
            <Route path="/learning" element={<Learning language={language} />} />
            {/* вывод из базы данных (map) */}
            {/* <Route
              path="/learning/html"
              element={<Lesson language={language} LessonDate={LessonDate} />}
            /> */}
            {LessonDate.map((el, i) => (
              <Route
                key={DataLearning[i].id}
                path={DataLearning[i].link}
                element={
                  <Lesson language={language} LessonDate={el} breads={DataLearning[i].title} />
                }
              />
            ))}

            {/* практика */}
            <Route path="/practice" element={<Practice language={language} />} />
            {DataPractice.map((el, i) => (
              <Route
                key={el.id}
                path={el.link}
                element={
                  <Task
                    language={language}
                    DataPractice={DataPractice[i]}
                    breads={DataPractice[i].title}
                    DataTask={DataTask[i]}
                  />
                }
              />
            ))}

            {/* тесты */}
            <Route path="/tests" element={<Tests language={language} DataTests={DataTests} />} />

            {QuestionsAllLanguage.map((el, i) => (
              <Route
                key={DataTests[i].id}
                path={DataTests[i].link}
                element={<Test language={language} DataTests={DataTests[i]} QuestionsHTML={el} />}
              />
            ))}

            {DataTests.map((el, i) => (
              <Route
                key={el.id}
                path={el.linkPreTest}
                element={
                  <PreTest
                    title={el.title}
                    language={language}
                    questionsQ={AllQuestion[i]}
                    link={el.link}
                    imgTest={el.imgResult}
                  />
                }
              />
            ))}
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Main;
