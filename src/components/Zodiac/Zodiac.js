import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac">
      <img src={`/zodiacs/${props.name}.png`} />
      <h1>{props.name}</h1>
      <h2>{props.dates}</h2>
    </div>
  );
}
