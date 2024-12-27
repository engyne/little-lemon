import { useMemo, useRef, useState } from 'react';
import './reservation.css'
import {ReactComponent as Done} from '../../assets/done.svg';

export function Reservation() {

  const [form, setForm] = useState({
    name: '',
    people: 1,
    time: '',
    date: '',
    outdoorTable: false,
  });
  const [isReservationDone, setIsReservationDone] = useState(false);

  const timeInputRef = useRef(null);
  const submitDisabled = useMemo(() => {
    return Object.keys(form).some(k => !form[k]) || form.people === '0' ||
      !timeInputRef.current.validity.valid;
  }, [form]);

  const handleChange = ({ target: { name, value }}) => {
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setIsReservationDone(true);
  }

  function getMinDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  function ReservationForm() {
    return (
      <>
        <form className="content-center">
          <fieldset>
            <legend>Reserve a table</legend>
            <label>
              Name:
              <input
                type="text"
                placeholder="name"
                value={form.name}
                name="name"
                onChange={handleChange}
              />
            </label>
            <label>
              Number of people:
              <input
                type="number"
                min="1"
                placeholder="1"
                name='people'
                value={form.people}
                onChange={handleChange}
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                onChange={handleChange} 
                name="date"
                min={getMinDate()}
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                min="19:00"
                max="23:00"
                name="time"
                value={form.time}
                onChange={handleChange}
                ref={timeInputRef}
              />
              { !timeInputRef.current?.validity?.valid &&
                <small className="input-error-message">{timeInputRef.current?.validationMessage}</small>
              }
            </label>
            <label className='outdoor-table'>
              <span>Need outdoor table?:</span> <input type='checkbox' value={form.outdoorTable} />
            </label>
            <button disabled={submitDisabled} onClick={handleSubmit} className='primary-btn'>Submit</button>
          </fieldset>
        </form>
      </>
    )
  }

  function ReservationConfirmation() {
    return (
      <div>
        <h1>Reservation confirmation:</h1>
        <dl>
          <dt>Name:</dt>
          <dd>{form.name}</dd>

          <dt>People:</dt>
          <dd>{form.people}</dd>

          <dt>Date:</dt>
          <dd>{ new Date(form.date).toLocaleDateString() }</dd>
          <dt>Time:</dt>
          <dd>{ form.time }</dd>
        </dl>
      </div>
    );
  }

  return (
    <>
      <section className='reservation content-center'>
        {
          isReservationDone ?
          <>
            <div className='reservation-done'>
              {ReservationConfirmation()}
              <Done className='done-svg' />
            </div>
          </> :
            ReservationForm()
        }
      </section>
    </>
  )
}