import './specials.css';
import { useEffect, useState } from 'react';

export function Specials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  function fetchData() {
    return new Promise(resolve => {
      const timer = setTimeout(() => {
        console.log('fetchData');
        fetch('data.json')
          .then(res => res.json())
          .then(data => resolve({data, timer}))
      }, 300);
    })
  }

  useEffect(() => {
    setLoading(true);
    let timerToClear;
    fetchData()
      .then(({data, timer}) => {
        setData(data);
        timerToClear = timer;
      })
      .finally(() => setLoading(false));


    fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
      .then(console.log)

    return () => clearTimeout(timerToClear);
  }, []);

  return (
    <>
      <section className="content-center specials">
        <h1>{loading ? 'Loading...' : 'Specials'}</h1>
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
