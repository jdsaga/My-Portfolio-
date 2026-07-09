function BubblesBackground() {
  return (
    <div className="bubbles-bg">
      {Array.from({ length: 15 }).map((_, i) => (
        <span key={i} className="bubble"></span>
      ))}
    </div>
  );
}

export default BubblesBackground;