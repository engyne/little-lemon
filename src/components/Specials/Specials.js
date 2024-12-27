import './specials.css';
import data from '../../data/data.json';

export function Specials() {
  return (
    <>
      <section className="content-center specials">
        <h1>Specials</h1>
        <div className='cards'>
          {
            data.map(item => (
              <article key={item.name}>
                <img src={item.image} alt={item.name} />
                <section className='content'>
                  <header>
                    <h2 className='title'>{item.name}</h2>
                    <span className='price'>{item.price}</span>
                  </header>
                  <p className='description'>{item.description}</p>
                  <button className='primary-btn'>Order now</button>
                </section>
              </article>
            ))
          }
          </div>
      </section>
    </>
  )
}
