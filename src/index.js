import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import HelloComponent from './component/HelloComponent';
// import YoutubeComponent from './component/Youtube/YoutubeComponent';
// import Home from './container/Home/Home';
import reportWebVitals from './reportWebVitals';
import BlogPost from './container/BlogPost/BlogPost';



ReactDOM.render(
  <React.StrictMode>
    <BlogPost />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
