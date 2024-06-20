import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); //하나의 컴포넌트만 쓸 수 있음. 그래서 App밑에 Potato써도 소용 없음
root.render(
    <App />

);