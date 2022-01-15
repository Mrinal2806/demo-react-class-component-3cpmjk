import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

const list = [
  { 1: 'test1' },
  { 2: 'test2' },
  { 3: 'test3' },
  { 4: 'test4' },
  { 5: 'test5' },
];

function App() {
  return <Counter name="Example" initialCount={5} />;
}

render(<App />, document.getElementById('root'));
