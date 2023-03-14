
import './App.css';
import React from 'react';

function App() {
const Handlecolor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  document.querySelector('.cardRgb').style.backgroundColor = rgb;
  document.querySelector('.cardRgb__title').innerHTML = rgb;

  
}
function copyToClipboard(e) {
  e.preventDefault();
  const button = document.querySelector('.cardRgb__button');
  const text = document.querySelector('.cardRgb__title').innerHTML;
  navigator.clipboard.writeText(text);
  button.innerHTML = 'Copied';
  if (button.innerHTML === 'Copied') {
    setTimeout(() => {
      button.innerHTML = 'Copy';
    }, 1000);
  }
  
};


  return (
    <div className="App">
      <div className="cardRgb" onClick={Handlecolor}>
        <div className="cardRgb__title">
          <h1>RGB</h1>
        </div>           

      </div>
      <button 
      onClick={copyToClipboard}
      className="cardRgb__button">Copy</button>

      




    </div>
  );
}
export default App;
