export default function Marquee() {
  const words = ['PINTXOS', 'TAPAS', 'VERMUT', 'CERVEZA', 'POBLE-SEC', 'BARCELONA'];
  const track = [...words, ...words];
  return (
    <div className="marquee" aria-label="Pintxos, tapas, vermut, beer, Poble-sec, Barcelona">
      <div className="marquee-track" aria-hidden="true">
        {track.map((word, index) => (
          <span key={`${word}-${index}`}>{word}<i>✳</i></span>
        ))}
      </div>
    </div>
  );
}
