import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

const languages = ['JavaScript','CSS','HTML']
const repos = ['exam','exam-review','validated form']

ReactDOM.render(<App languages={languages} repos={repos}/>, document.getElementById('root'));
