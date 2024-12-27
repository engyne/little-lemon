import './hero.css';
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="content-center hero-content">
          <div className="left">
            <h1>Little Lemon</h1>
            <p>
              Little Lemon offers fresh, flavorful Mediterranean dishes in a warm, welcoming atmosphere.
            </p>
            <Link to='/reservation' className='reserve-btn primary-btn'>
              Reserve a table
            </Link>
          </div>
          <div className="right">
            <img src='/assets/hero.png' alt='hero' />
          </div>
        </div>
      </section>
    </>
  );
}
