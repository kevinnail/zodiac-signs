import React from 'react';
import './Main.css';
import { zodiacs } from '../../data';
import background from '../../background.jpg';
import ZodiacCard from '../ZodiacCard/ZodiacCard';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.name} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  );
}
