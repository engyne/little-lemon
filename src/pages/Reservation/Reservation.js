import { useState } from 'react';
import { BookingForm } from '../../components/BookingForm/BookingForm';
import { BookingConfirmation } from '../../components/BookingConfirmation/BookingConfirmation';
import { submitAPI } from '../../helpers/submitAPI';

export function Reservation() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    people: 1,
    time: '',
    date: '',
    occasion: '',
    outdoorTable: false,
  });
  const [isReservationDone, setIsReservationDone] = useState(false);

  const handleChange = ({ target: { name, value }}) => {
    setForm({ ...form, [name]: name === 'outdoorTable' ? !form.outdoorTable : value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataSumitted = submitAPI(form);
    setIsReservationDone(dataSumitted);
  }

  return (
    <>
      <section className='content-center'>
        {
          isReservationDone ?
            <BookingConfirmation form={form} /> :
            <BookingForm
              form={form}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
        }
      </section>
    </>
  )
}