import './Zodiac.css';

export default function Zodiac(props) {
  let audio = new Audio(`/zodiacs/satan.wav`);
  let audio2 = new Audio(`/zodiacs/death.wav`);
  let audio3 = new Audio(`/zodiacs/laugh.wav`);
  const start = () => {
    audio.play();
    // eslint-disable-next-line space-before-function-paren
    setTimeout(function () {
      audio2.play();
    }, 1000);
    // eslint-disable-next-line space-before-function-paren
    setTimeout(function () {
      audio3.play();
    }, 2500);
  };
  return (
    <div onClick={start} className="zodiac">
      <img src={`/zodiacs/${props.name}.png`} />
      <h1>{props.name}</h1>
      <h2>{props.dates}</h2>
    </div>
  );
}
