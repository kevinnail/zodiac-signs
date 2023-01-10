import React from 'react';
import './Main.css';
import { zodiacs } from '../../data';
import background from '../../background.jpg';
import Zodiac from '../Zodiac/Zodiac';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.name} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  );
}
