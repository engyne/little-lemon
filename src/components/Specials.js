import '../styles/specials.css';
import data from '../data/data.json';

function Specials() {
  return (
    <>
      <section className="content-center specials">
        <h1>Specials</h1>
        <div className='cards'>
          {
            data.map(item => (
              <article>
                <img src={item.image} alt={item.name} />
                <section className='content'>
                  <header>
                    <h2 className='title'>{item.name}</h2>
                    <span className='price'>{item.price}</span>
                  </header>
                  <p className='description'>{item.description}</p>
                  <button>Order now</button>
                </section>
              </article>
            ))
          }
          </div>
      </section>
    </>
  )
}

export default Specials;