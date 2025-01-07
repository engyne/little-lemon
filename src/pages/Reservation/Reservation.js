import { useMemo, useRef, useState } from 'react';
import './reservation.css'
import {ReactComponent as Done} from '../../assets/done.svg';
import {Button} from '../../components/Button';
import {InputWithLabel} from '../../components/InputWithLabel';

export function Reservation() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    people: 1,
    time: '',
    date: '',
    outdoorTable: false,
  });
  const [isReservationDone, setIsReservationDone] = useState(false);

  const timeInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const submitDisabled = useMemo(() => {
    return Object.keys(form).some(k => !form[k] && k !== 'outdoorTable') ||
      form.people === '0' ||
      !timeInputRef.current.validity.valid ||
      !emailInputRef.current.validity.valid;
  }, [form]);

  const handleChange = ({ target: { name, value }}) => {
    setForm({ ...form, [name]: name === 'outdoorTable' ? !form.outdoorTable : value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitDisabled) return;
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
            <InputWithLabel
              label="Name"
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
            <InputWithLabel
              ref={emailInputRef}
              label="Email"
              name="email"
              type="email"
              placeholder="email"
              value={form.email}
              invalid={!emailInputRef.current?.validity.valid}
              validationMessage={emailInputRef.current?.validationMessage}
              onChange={handleChange}
            />
            <InputWithLabel
              label="Phone number"
              name="phone"
              placeholder="phone number"
              value={form.phone}
              onChange={handleChange}
            />
            <InputWithLabel
              label="Number of people"
              name="people"
              placeholder="1"
              value={form.people}
              onChange={handleChange}
            />
            <InputWithLabel
              label="Date"
              name="date"
              type="date"
              min={getMinDate()}
              onChange={handleChange}
            />
            <InputWithLabel
              ref={timeInputRef}
              label="Time"
              name="time"
              type="time"
              min="19:00"
              max="23:00"
              value={form.time}
              invalid={!timeInputRef.current?.validity.valid}
              validationMessage={timeInputRef.current?.validationMessage}
              onChange={handleChange}
            />
            <label className='outdoor-table'>
              <span>Need outdoor table?:</span> <input type='checkbox' name='outdoorTable' value={form.outdoorTable} onChange={handleChange} />
            </label>
            <Button
              className="submit"
              disabled={submitDisabled}
              variant="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
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
          <dt>Email:</dt>
          <dd>{form.email}</dd>
          <dt>Phone number:</dt>
          <dd>{form.phone}</dd>

          <dt>People:</dt>
          <dd>{form.people}</dd>

          <dt>Date:</dt>
          <dd>{ new Date(form.date).toLocaleDateString() }</dd>
          <dt>Time:</dt>
          <dd>{ form.time }</dd>
          <dt>Outdoor table:</dt>
          <dd>{ form.outdoorTable ? 'Yes' : 'No' }</dd>
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