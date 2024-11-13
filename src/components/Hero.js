import '../styles/hero.css';

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="content-center hero-content">
          <div className="left">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <p>We are a family owned</p>
            <p>mediterranean restaurant focused</p>
            <p>on traditional recipes served with a</p>
            <p> modern twist.</p>
            <button>Reserve a Table</button>
          </div>
          <div className="right">
            <img src='/assets/hero.png' alt='hero' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
