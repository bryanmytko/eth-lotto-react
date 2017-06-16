import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var ProgressBar = require('progressbar.js')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ProgressBar DEMO @TODO move this and integrate with React
let animatePercentage = 0.22;
let bar = new ProgressBar.Circle('.progressBar', {
  strokeWidth: 20,
  easing: 'easeInOut',
  duration: (animatePercentage * 1000 / animatePercentage),
  color: '#2E3E4B',
  trailColor: '#86E0D3',
  trailWidth: 20,
  svgStyle: null,
  text: {
    value: (animatePercentage * 100) + " % complete.",
    className: 'progressbar__label',
  },
});

bar.animate(animatePercentage);

// @TODO Remove this, dummy code for demo
let b = document.querySelectorAll('.btn');
b[0].addEventListener("click", function(e){
  animatePercentage += .10;
  bar.animate(animatePercentage);
}, false);
