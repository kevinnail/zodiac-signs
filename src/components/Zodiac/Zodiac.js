import './Zodiac.css';

export default function Zodiac(props) {
  let audio = new Audio(`/zodiacs/satan.wav`);
  let audio2 = new Audio(`/zodiacs/laugh.wav`);
  const start = () => {
    audio.play();
    audio2.play();
  };
  return (
    <div onClick={start} className="zodiac">
      <img src={`/zodiacs/${props.name}.png`} />
      <h1>{props.name}</h1>
      <h2>{props.dates}</h2>
    </div>
  );
}
