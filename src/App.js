import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
  {
    label: 'Color Red',
    value: 'red'
  },
  {
    label: 'Color Green',
    value: 'green'
  },
  {
    label: 'Color Blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
