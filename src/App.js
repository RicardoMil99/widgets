import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: "What is react?",
    content: "React is a front end JS library"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS libray among engineers"
  }
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
